"use client";

import { cn } from "../lib/utils";
import { useLanguage } from "./LanguageProvider";

type StableI18nTextProps = {
  uk: string;
  es: string;
  className?: string;
};

/**
 * Reserva el ancho máximo entre ambos idiomas para evitar "saltos"
 * de layout al cambiar el idioma.
 */
export function StableI18nText({ uk, es, className }: StableI18nTextProps) {
  const { lang } = useLanguage();
  const current = lang === "uk" ? uk : es;

  return (
    <span className={cn("inline-grid align-middle", className)}>
      <span className="invisible col-start-1 row-start-1">{uk}</span>
      <span className="invisible col-start-1 row-start-1">{es}</span>
      <span className="col-start-1 row-start-1">{current}</span>
    </span>
  );
}
