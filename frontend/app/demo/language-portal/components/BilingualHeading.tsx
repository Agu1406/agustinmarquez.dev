"use client";

import { useLanguage } from "./LanguageProvider";

export function BilingualHeading({
  uk,
  es,
  as: Tag = "h2",
  className = "",
}: {
  uk: string;
  es: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const { lang } = useLanguage();
  const main = lang === "uk" ? uk : es;
  const sub = lang === "uk" ? es : uk;

  return (
    <div className={className}>
      <Tag className="text-3xl font-semibold tracking-tight md:text-4xl">{main}</Tag>
      <p className="s-muted mt-2">{sub}</p>
    </div>
  );
}
