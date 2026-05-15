"use client";

import { SITE_CONFIG } from "@/app/config/site";
import { useLanguage } from "@/app/context/LanguageContext";
import AnimatedCounter from "@/app/components/ui/AnimatedCounter";

const statItems = [
  { value: SITE_CONFIG.STATS.couriers, labelKey: "stats.label_couriers" },
  { value: SITE_CONFIG.STATS.drivers, labelKey: "stats.label_drivers" },
  { value: SITE_CONFIG.STATS.cities, labelKey: "stats.label_cities" },
  { value: SITE_CONFIG.STATS.avgEarning, labelKey: "stats.label_earning" },
];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg-secondary)] border-y border-[var(--border)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((s) => (
            <div key={s.labelKey} className="text-center">
              <p
                className="font-bold text-[var(--accent)] mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                <AnimatedCounter target={s.value} />
              </p>
              <p className="text-sm text-[var(--text-muted)] capitalize">{t(s.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
