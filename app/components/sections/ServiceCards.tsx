"use client";

import { Bike, Car, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/app/config/site";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ServiceCards() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            accentColor="var(--accent)"
            icon={<Bike size={28} />}
            title={t("services.food.title")}
            desc={t("services.food.desc")}
            stats={[
              t("services.food.commission"),
              t("services.food.earning"),
              t("services.food.bonus"),
            ]}
            ctaLabel={t("services.food.cta")}
            ctaHref={SITE_CONFIG.GOOGLE_FORM_FOOD_URL}
            ctaVariant="green"
          />
          <ServiceCard
            accentColor="var(--bolt-yellow)"
            icon={<Car size={28} />}
            title={t("services.drive.title")}
            desc={t("services.drive.desc")}
            stats={[
              t("services.drive.commission"),
              t("services.drive.earning"),
              t("services.drive.bonus"),
            ]}
            ctaLabel={t("services.drive.cta")}
            ctaHref={SITE_CONFIG.GOOGLE_FORM_DRIVE_URL}
            ctaVariant="yellow"
          />
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  accentColor: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  stats: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "green" | "yellow";
}

function ServiceCard({ accentColor, icon, title, desc, stats, ctaLabel, ctaHref, ctaVariant }: CardProps) {
  return (
    <div
      className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 flex flex-col gap-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      style={{ borderTopWidth: 3, borderTopColor: accentColor }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: accentColor, color: "#000" }}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-bold text-[var(--text)] mb-2">{title}</h3>
        <p className="text-[var(--text-muted)] leading-relaxed text-sm">{desc}</p>
      </div>

      <ul className="space-y-2">
        {stats.map((s) => (
          <li key={s} className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            {s}
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 ${
          ctaVariant === "green"
            ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-dark)]"
            : "bg-[var(--bolt-yellow)] text-black hover:opacity-90"
        }`}
      >
        {ctaLabel}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}
