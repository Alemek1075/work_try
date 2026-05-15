"use client";

import { CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/app/config/site";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[var(--bg)] pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="hero-text">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent)] text-[var(--accent)] text-sm font-semibold mb-6 animate-fade-up">
            {t("hero.badge")}
          </span>

          <h1
            className="font-bold leading-[1.05] text-[var(--text)] mb-6 animate-fade-up-delay-1"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", animationDelay: "0.4s" }}
          >
            {t("hero.headline")}
          </h1>

          <p
            className="text-[var(--text-muted)] text-lg leading-relaxed mb-10 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            {t("hero.subtitle")}
          </p>

          <div
            className="flex flex-wrap gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href={SITE_CONFIG.GOOGLE_FORM_FOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[var(--accent)] text-black font-semibold text-base hover:bg-[var(--accent-dark)] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[var(--accent)]/20"
            >
              {t("hero.cta_food")}
            </a>
            <a
              href={SITE_CONFIG.GOOGLE_FORM_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[var(--bolt-yellow)] text-black font-semibold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[var(--bolt-yellow)]/20"
            >
              {t("hero.cta_drive")}
            </a>
          </div>

          <div className="flex flex-wrap gap-5">
            {[t("hero.trust1"), t("hero.trust2"), t("hero.trust3")].map((trust) => (
              <div key={trust} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <CheckCircle size={15} className="text-[var(--accent)]" />
                <span>{trust}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-[40px] bg-[var(--accent)] opacity-20 rotate-6 scale-90" />
            <div className="absolute inset-0 rounded-[40px] bg-[var(--bolt-yellow)] opacity-15 -rotate-6 scale-95" />
            <div className="absolute inset-8 rounded-[32px] bg-[var(--accent)] opacity-10" />

            <div className="absolute bottom-10 -left-4 md:-left-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 shadow-xl flex items-center gap-3 min-w-[180px]">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                ✓
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Priemerný zárobok</p>
                <p className="text-base font-bold text-[var(--accent)]">{SITE_CONFIG.STATS.avgEarning}/mo</p>
              </div>
            </div>

            <div className="absolute top-8 -right-4 md:-right-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bolt-yellow)] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                ★
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Verified Fleet</p>
                <p className="text-sm font-bold text-[var(--text)]">Slovakia</p>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold text-[var(--accent)] opacity-20">B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
