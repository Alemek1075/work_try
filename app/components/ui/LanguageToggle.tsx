"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex rounded-full border border-[var(--border)] overflow-hidden text-sm font-semibold">
      {(["sk", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-3 py-1 uppercase transition-colors ${
            locale === l
              ? "bg-[var(--accent)] text-black"
              : "text-[var(--text-muted)] hover:text-[var(--text)]"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
