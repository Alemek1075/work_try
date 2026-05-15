"use client";

import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/app/config/site";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[var(--bg-secondary)] dark-cta py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--bolt-yellow)]/5 animate-gradient-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2
          className="font-bold text-[var(--text)] mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {t("cta.title")}
        </h2>
        <p className="text-[var(--text-muted)] text-xl mb-12">{t("cta.subtitle")}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SITE_CONFIG.GOOGLE_FORM_FOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-black font-semibold text-base hover:bg-[var(--accent-dark)] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--accent)]/25"
          >
            {t("cta.food")}
            <ArrowRight size={16} />
          </a>
          <a
            href={SITE_CONFIG.GOOGLE_FORM_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--bolt-yellow)] text-black font-semibold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--bolt-yellow)]/25"
          >
            {t("cta.drive")}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
