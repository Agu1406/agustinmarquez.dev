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
      <div className="w-full rounded-xl border border-border/70 bg-card/72 px-4 py-3 text-center shadow-sm backdrop-blur-sm">
        <span className="mx-auto mb-2 block h-0.5 w-12 rounded-full bg-primary/70" />
        <Tag className="font-heading text-2xl font-extrabold tracking-tight text-foreground drop-shadow-[0_1px_1px_rgba(255,255,255,0.35)] md:text-3xl">
          {main}
        </Tag>
        <p className="mt-1 text-sm font-semibold text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
