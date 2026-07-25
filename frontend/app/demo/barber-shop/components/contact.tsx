import { HOURS, SITE } from "@/app/demo/barber-shop/lib/data";

export function Contact() {
  return (
    <section id="contacto" className="bg-ink py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-display text-sm tracking-[0.3em] text-brass uppercase">
            Visítanos
          </p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
            Contacto y horario
          </h2>
          <p className="mt-4 text-cream-muted">
            Estamos en Las Rozas. Reserva online o escríbenos: te respondemos
            rápido.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] text-brass uppercase">
                Dirección
              </h3>
              <p className="mt-3 font-display text-2xl text-cream">
                {SITE.address.street}
              </p>
              <p className="mt-1 text-cream-muted">{SITE.address.city}</p>
              <a
                href={SITE.address.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm tracking-wide text-brass transition hover:text-brass-bright"
              >
                Cómo llegar →
              </a>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] text-brass uppercase">
                Horario
              </h3>
              <ul className="mt-3 space-y-2">
                {HOURS.map((row) => (
                  <li
                    key={row.day}
                    className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="text-cream">{row.day}</span>
                    <span className="text-sm text-cream-muted">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={SITE.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-brass px-6 py-3.5 text-sm tracking-[0.14em] text-ink uppercase transition hover:bg-brass-bright"
              >
                Reservar en Booksy
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-cream/35 px-6 py-3.5 text-sm tracking-[0.14em] text-cream uppercase transition hover:border-brass hover:text-brass"
              >
                WhatsApp
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex border border-cream/35 px-6 py-3.5 text-sm tracking-[0.14em] text-cream uppercase transition hover:border-brass hover:text-brass"
              >
                Llamar
              </a>
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden border border-line bg-ink-elevated md:min-h-[420px]">
            <iframe
              title="Mapa de Ikaro Men's Barber"
              src={SITE.address.embed}
              className="h-full min-h-[320px] w-full grayscale contrast-125 invert-[0.9] md:min-h-[420px]"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
