"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import FaqAccordion from "@/app/components/ui/FaqAccordion";

const FOOD_FAQ_COUNT = 9;

export default function FaqFood() {
  const { t } = useLanguage();

  const items = Array.from({ length: FOOD_FAQ_COUNT }, (_, i) => ({
    question: t(`faq.food.q${i + 1}`),
    answer: t(`faq.food.a${i + 1}`),
  }));

  return (
    <section className="bg-[var(--bg-secondary)] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="font-bold text-[var(--text)] mb-12"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
        >
          <span className="text-[var(--accent)]">●</span> {t("faq.food.title")}
        </h2>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
