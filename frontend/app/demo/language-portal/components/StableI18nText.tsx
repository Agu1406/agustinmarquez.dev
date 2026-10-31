"use client";

import { useLanguage } from "./LanguageProvider";

type StableI18nTextProps = {
  uk: string;
  es: string;
  className?: string;
};

/**
 * Reserva el ancho de los dos idiomas para que el cambio no mueva el layout.
 */
export function StableI18nText({ uk, es, className }: StableI18nTextProps) {
  const { lang } = useLanguage();
  const current = lang === "uk" ? uk : es;
  const classes = className
    ? `inline-grid align-middle ${className}`
    : "inline-grid align-middle";

  return (
    <span className={classes}>
      <span className="invisible col-start-1 row-start-1">{uk}</span>
      <span className="invisible col-start-1 row-start-1">{es}</span>
      <span className="col-start-1 row-start-1">{current}</span>
    </span>
  );
}
