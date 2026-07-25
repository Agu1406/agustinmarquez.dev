import { REVIEWS, SITE } from "@/app/demo/barber-shop/lib/data";

export function Reviews() {
  return (
    <section id="opiniones" className="grain relative bg-ink-soft py-20 md:py-28">
      <div className="section-pad relative z-[2] mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-brass uppercase">
              Confianza
            </p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
              Lo que dicen los clientes
            </h2>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-cream-muted">
            <p>
              <span className="font-display text-3xl text-brass">
                {SITE.ratings.google.score}
              </span>{" "}
              Google · {SITE.ratings.google.count} opiniones
            </p>
            <p>
              <span className="font-display text-3xl text-brass">
                {SITE.ratings.booksy.score}
              </span>{" "}
              Booksy · {SITE.ratings.booksy.count} reseñas
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote
              key={`${review.name}-${review.text.slice(0, 24)}`}
              className="border border-line bg-ink/40 p-6 md:p-7"
            >
              <p className="font-display text-lg leading-snug text-cream md:text-xl">
                “{review.text}”
              </p>
              <footer className="mt-6 border-t border-line pt-4">
                <cite className="not-italic">
                  <span className="block text-sm text-cream">{review.name}</span>
                  <span className="mt-1 block text-xs tracking-wide text-cream-muted">
                    {review.service} · {review.source}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
