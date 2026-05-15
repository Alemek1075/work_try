"use client";

import { Phone, Mail, Clock, Share2, ExternalLink, Link } from "lucide-react";
import { SITE_CONFIG } from "@/app/config/site";
import { useLanguage } from "@/app/context/LanguageContext";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import LanguageToggle from "@/app/components/ui/LanguageToggle";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-1 font-bold text-xl mb-3">
              <span className="text-[var(--text)]">{SITE_CONFIG.COMPANY_NAME.slice(0, -5)}</span>
              <span className="text-[var(--accent)]">{SITE_CONFIG.COMPANY_NAME.slice(-5)}</span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] ml-0.5 mb-1" />
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              {[Share2, ExternalLink, Link].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[var(--accent)] flex-shrink-0" />
                <span>Food: {SITE_CONFIG.PHONE_FOOD}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--accent)] flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.EMAIL_FOOD}`} className="hover:text-[var(--accent)] transition-colors">
                  {SITE_CONFIG.EMAIL_FOOD}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[var(--bolt-yellow)] flex-shrink-0" />
                <span>Drive: {SITE_CONFIG.PHONE_DRIVE}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--bolt-yellow)] flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.EMAIL_DRIVE}`} className="hover:text-[var(--accent)] transition-colors">
                  {SITE_CONFIG.EMAIL_DRIVE}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Clock size={14} className="text-[var(--text-muted)] flex-shrink-0" />
                <span>{SITE_CONFIG.HOURS}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.GOOGLE_FORM_FOOD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {t("nav.food")}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.GOOGLE_FORM_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {t("nav.drive")}
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[var(--text-muted)]">{t("footer.copyright").replace("2025", String(year))}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1 max-w-lg">{t("footer.legal_note")}</p>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
