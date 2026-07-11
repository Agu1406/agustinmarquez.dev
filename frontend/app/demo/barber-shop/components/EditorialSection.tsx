import { editorialQuotes } from "../lib/business";

export function EditorialSection() {
  return (
    <section className="border-y border-border/40 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {editorialQuotes.map((quote, i) => (
            <li key={i} className="relative md:px-4">
              {i > 0 && (
                <div className="gold-line absolute -left-3 top-0 hidden h-full w-px md:block" />
              )}
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
                Editorial · 0{i + 1}
              </p>
              <blockquote className="mt-3 text-base leading-relaxed text-foreground/92 md:text-[1.05rem]">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
