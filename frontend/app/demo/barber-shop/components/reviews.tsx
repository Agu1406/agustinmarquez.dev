import { Reveal } from "@/app/demo/barber-shop/components/reveal";
import { externalLabel } from "@/app/demo/barber-shop/lib/a11y";
import { REVIEWS, SITE } from "@/app/demo/barber-shop/lib/data";

export function Reviews() {
  return (
    <section
      id="opiniones"
      className="grain relative bg-ink-soft pt-12 pb-20 md:pt-16 md:pb-28"
      aria-labelledby="reviews-title"
    >
      <div className="section-pad relative z-[2] mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-brass uppercase">
                Confianza
              </p>
              <h2
                id="reviews-title"
                className="mt-3 font-display text-4xl text-cream md:text-5xl"
              >
                Lo que dicen los clientes
              </h2>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-cream-muted">
              <a
                href={SITE.ratings.google.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLabel(
                  `Ver ${SITE.ratings.google.count} opiniones en Google con valoración ${SITE.ratings.google.score}`,
                )}
                className="transition hover:text-brass"
              >
                <span className="font-display text-3xl text-brass" aria-hidden="true">
                  {SITE.ratings.google.score}
                </span>{" "}
                Google · {SITE.ratings.google.count} opiniones
              </a>
              <a
                href={SITE.ratings.booksy.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLabel(
                  `Ver ${SITE.ratings.booksy.count} reseñas en Booksy con valoración ${SITE.ratings.booksy.score}`,
                )}
                className="transition hover:text-brass"
              >
                <span className="font-display text-3xl text-brass" aria-hidden="true">
                  {SITE.ratings.booksy.score}
                </span>{" "}
                Booksy · {SITE.ratings.booksy.count} reseñas
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <blockquote
                key={`${review.name}-${review.source}-${index}`}
                className="border border-line bg-ink/40 p-6 md:p-7"
                cite={review.source}
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
        </Reveal>
      </div>
    </section>
  );
}
