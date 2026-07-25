import { ServiceIcon } from "@/app/demo/barber-shop/components/service-icon";
import { SERVICES, SITE } from "@/app/demo/barber-shop/lib/data";

export function Services() {
  return (
    <section id="servicios" className="grain relative bg-ink-soft py-20 md:py-28">
      <div className="section-pad relative z-[2] mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-display text-sm tracking-[0.3em] text-brass uppercase">
            Carta
          </p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
            Servicios
          </h2>
          <p className="mt-4 text-cream-muted">
            Precios orientativos. Reserva online en Booksy o escríbenos por
            WhatsApp.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {SERVICES.map((service) => (
            <li
              key={service.name}
              className="group grid gap-3 py-5 transition md:grid-cols-[1fr_auto_auto] md:items-center md:gap-8"
            >
              <div className="flex gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-line text-brass transition group-hover:border-brass/60 group-hover:text-brass-bright">
                  <ServiceIcon icon={service.icon} />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl text-cream md:text-2xl">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="text-[10px] tracking-[0.18em] text-brass uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  {service.description && (
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream-muted">
                      {service.description}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-cream-muted md:hidden">
                    {service.duration} · {service.price}
                  </p>
                </div>
              </div>
              <p className="hidden text-sm text-cream-muted md:block">
                {service.duration}
              </p>
              <div className="flex items-center justify-between gap-6 md:justify-end">
                <p className="hidden font-display text-xl text-brass md:block">
                  {service.price}
                </p>
                <a
                  href={SITE.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.16em] text-cream uppercase transition group-hover:text-brass"
                >
                  Agendar →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
