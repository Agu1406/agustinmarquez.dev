import { Reveal } from "@/app/demo/barber-shop/components/reveal";
import { ServiceIcon } from "@/app/demo/barber-shop/components/service-icon";
import { SERVICES, SITE } from "@/app/demo/barber-shop/lib/data";

const orderedServices = [...SERVICES].sort(
  (a, b) => Number(Boolean(b.popular)) - Number(Boolean(a.popular)),
);

export function Services() {
  return (
    <section id="servicios" className="grain relative bg-ink-soft py-20 md:py-28">
      <div className="section-pad relative z-[2] mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-display text-sm tracking-[0.3em] text-brass uppercase">
              Carta
            </p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
              Servicios
            </h2>
            <p className="mt-4 text-cream-muted">
              Precios orientativos. Reserva online en{" "}
              <a
                href={SITE.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass transition hover:text-brass-bright"
              >
                Booksy
              </a>{" "}
              o escríbenos por{" "}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass transition hover:text-brass-bright"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="divide-y divide-line border-y border-line">
            {orderedServices.map((service) => (
              <li
                key={service.name}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 py-5 transition md:grid-cols-[2.5rem_minmax(0,1fr)_5.5rem_5rem_auto] md:items-start md:gap-x-8"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-line text-brass transition group-hover:border-brass/60 group-hover:text-brass-bright">
                  <ServiceIcon icon={service.icon} />
                </span>

                <div className="min-w-0">
                  <div className="flex min-w-0 items-center gap-3">
                    <h3 className="min-w-0 truncate font-display text-xl text-cream md:text-2xl">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="shrink-0 text-[10px] tracking-[0.18em] text-brass uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  {service.description && (
                    <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                      {service.description}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-cream-muted md:hidden">
                    {service.duration} · {service.price}
                  </p>
                </div>

                <p className="hidden pt-2 text-sm text-cream-muted md:block">
                  {service.duration}
                </p>
                <p className="hidden pt-1 font-display text-xl text-brass md:block">
                  {service.price}
                </p>
                <a
                  href={SITE.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden pt-2.5 text-xs tracking-[0.16em] text-cream uppercase transition group-hover:text-brass md:inline-block"
                >
                  Agendar →
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
