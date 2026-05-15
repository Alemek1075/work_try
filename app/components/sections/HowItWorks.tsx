"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const steps = ["step1", "step2", "step3"];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="font-bold text-[var(--text)] text-center mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
        >
          {t("how.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-[var(--border)]" />

          {steps.map((step, i) => (
            <div key={step} className="relative flex flex-col items-center text-center px-8 py-6">
              {i < steps.length - 1 && (
                <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-16 border-t-2 border-dashed border-[var(--border)]" />
              )}
              <span
                className="text-6xl font-bold text-[var(--accent)] mb-4 leading-none relative z-10"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">{t(`how.${step}.title`)}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{t(`how.${step}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
