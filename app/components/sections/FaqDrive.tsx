"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import FaqAccordion from "@/app/components/ui/FaqAccordion";

const DRIVE_FAQ_COUNT = 10;

export default function FaqDrive() {
  const { t } = useLanguage();

  const items = Array.from({ length: DRIVE_FAQ_COUNT }, (_, i) => ({
    question: t(`faq.drive.q${i + 1}`),
    answer: t(`faq.drive.a${i + 1}`),
  }));

  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="font-bold text-[var(--text)] mb-12"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
        >
          <span className="text-[var(--bolt-yellow)]">●</span> {t("faq.drive.title")}
        </h2>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
