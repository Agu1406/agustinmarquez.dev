import { editorialQuotes } from "../lib/business";

export function EditorialSection() {
  return (
    <section className="border-y border-white/10 py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {editorialQuotes.map((quote, i) => (
            <li key={i} className="relative text-center md:px-4">
              {i > 0 && (
                <div className="gold-line absolute -left-3 top-0 hidden h-full w-px md:block" />
              )}
              <p className="section-eyebrow !text-[0.7rem]">Editorial · 0{i + 1}</p>
              <blockquote className="mt-3 text-base font-medium leading-relaxed text-white md:text-[1.05rem]">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
