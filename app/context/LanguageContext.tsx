"use client";

import { createContext, useContext, useEffect, useState } from "react";
import sk from "@/app/translations/sk";
import en from "@/app/translations/en";

type Locale = "sk" | "en";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = { sk, en };

const LanguageContext = createContext<LanguageContextValue>({
  locale: "sk",
  setLocale: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("sk");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "sk" || stored === "en") setLocaleState(stored);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  const t = (key: string): string =>
    translations[locale][key] ?? translations["sk"][key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
