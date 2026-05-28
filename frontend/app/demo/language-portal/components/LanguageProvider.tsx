"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "uk" | "es";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (uk: string, es: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "lp_demo_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("uk");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "uk" || saved === "es") setLang(saved);
  }, []);

  function toggleLang() {
    setLang((prev) => {
      const next = prev === "uk" ? "es" : "uk";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggleLang,
      t: (uk: string, es: string) => (lang === "uk" ? uk : es),
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
