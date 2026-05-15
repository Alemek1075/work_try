"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/app/config/site";
import { useLanguage } from "@/app/context/LanguageContext";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import LanguageToggle from "@/app/components/ui/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (menuOpen && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[var(--bg)]/90 border-b border-[var(--border)] shadow-sm"
            : "backdrop-blur-md bg-[var(--bg)]/70 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className={`flex items-center gap-1 font-bold text-lg transition-all ${scrolled ? "scale-95" : "scale-100"}`}>
            <span className="text-[var(--text)] font-[var(--font-syne)]">
              {SITE_CONFIG.COMPANY_NAME.slice(0, -5)}
            </span>
            <span className="text-[var(--accent)]">
              {SITE_CONFIG.COMPANY_NAME.slice(-5)}
            </span>
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] ml-0.5 mb-1" />
          </a>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#hero"
              className="px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {t("nav.home")}
            </a>
            <a
              href={SITE_CONFIG.GOOGLE_FORM_FOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-black transition-all"
            >
              {t("nav.food")}
            </a>
            <a
              href={SITE_CONFIG.GOOGLE_FORM_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm rounded-full bg-[var(--accent)] text-black font-semibold hover:bg-[var(--accent-dark)] transition-all"
            >
              {t("nav.drive")}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={drawerRef}
          className="fixed inset-0 z-40 flex flex-col pt-16 bg-[var(--bg)] md:hidden"
        >
          <div className="flex flex-col gap-4 p-8 flex-1">
            <a
              href="#hero"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              {t("nav.home")}
            </a>
            <a
              href={SITE_CONFIG.GOOGLE_FORM_FOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center px-6 py-4 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-semibold text-lg hover:bg-[var(--accent)] hover:text-black transition-all"
            >
              {t("nav.food")}
            </a>
            <a
              href={SITE_CONFIG.GOOGLE_FORM_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center px-6 py-4 rounded-full bg-[var(--accent)] text-black font-semibold text-lg hover:bg-[var(--accent-dark)] transition-all"
            >
              {t("nav.drive")}
            </a>
            <div className="flex items-center gap-4 pt-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
