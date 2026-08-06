import { externalLabel } from "@/app/demo/barber-shop/lib/a11y";
import { SITE } from "@/app/demo/barber-shop/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-wide text-cream">
            {SITE.name}
          </p>
          <p className="mt-1 text-sm text-cream-muted">{SITE.address.full}</p>
        </div>
        <nav aria-label="Contacto">
          <ul className="flex flex-wrap gap-5 text-sm text-cream-muted">
            <li>
              <a
                href={SITE.phoneHref}
                aria-label={`Llamar al ${SITE.phone}`}
                className="transition hover:text-brass"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.booksy}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLabel("Reservar en Booksy")}
                className="transition hover:text-brass"
              >
                Booksy
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={externalLabel("Contactar por WhatsApp")}
                className="transition hover:text-brass"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="section-pad mx-auto max-w-7xl border-t border-line py-5 text-xs text-cream-muted">
        © {year} {SITE.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
