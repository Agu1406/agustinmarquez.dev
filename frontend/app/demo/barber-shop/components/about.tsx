import { SITE, STAFF } from "@/app/demo/barber-shop/lib/data";

export function About() {
  return (
    <section id="sobre-nosotros" className="bg-ink py-20 md:py-28">
      <div className="section-pad mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
        <div className="relative aspect-video overflow-hidden border border-line lg:col-span-5 lg:aspect-[4/3]">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Ambiente y detalle de barbería en Ikaro Men's Barber"
          >
            <source src="/demo/barber-shop/about-barber.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        </div>

        <div className="lg:col-span-7">
          <p className="font-display text-sm tracking-[0.3em] text-brass uppercase">
            La barbería
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-cream md:text-5xl">
            Estilo, precisión y el trato de casa
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-cream-muted">
            <p>
              En {SITE.name} elevamos la peluquería de caballeros: cortes
              clásicos y actuales, barbería experta y productos pensados para el
              cuidado diario.
            </p>
            <p>
              José Sotelo y su equipo te escuchan, cuidan cada detalle y te
              dejan salir con un resultado limpio, natural y a tu medida — desde
              el primer corte hasta el afeitado tradicional.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {SITE.amenities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-cream"
              >
                <span className="h-px w-4 bg-brass" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-line pt-8">
            <p className="text-xs tracking-[0.2em] text-brass uppercase">
              Equipo
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {STAFF.map((person) => (
                <li key={person.name}>
                  <p className="font-display text-xl text-cream">{person.name}</p>
                  <p className="text-sm text-cream-muted">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
