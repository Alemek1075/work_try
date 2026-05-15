"use client";

import { useEffect, useRef, useState } from "react";
import { Banknote, Percent, Gift, Clock, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const benefits = [
  { icon: Banknote, key: "benefit1" },
  { icon: Percent, key: "benefit2" },
  { icon: Gift, key: "benefit3" },
  { icon: Clock, key: "benefit4" },
  { icon: Globe, key: "benefit5" },
  { icon: CheckCircle, key: "benefit6" },
];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-secondary)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="font-bold text-[var(--text)] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            {t("why.title")}
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">{t("why.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, key }, i) => (
            <RevealCard key={key} delay={i * 100}>
              <div className="w-11 h-11 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-4">
                <Icon size={20} className="text-black" />
              </div>
              <h3 className="font-bold text-[var(--text)] mb-2">{t(`why.${key}.title`)}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{t(`why.${key}.desc`)}</p>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function RevealCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}
