import Link from "next/link";
import { CLASES } from "../lib/clases";
import { CLASES_FOOTER_SLUGS } from "../lib/seo";
import { LEGAL, PROJECTS, SITE } from "../lib/site";

const clasesFooter = CLASES_FOOTER_SLUGS.map((slug) =>
  CLASES.find((clase) => clase.slug === slug),
).filter((clase): clase is (typeof CLASES)[number] => Boolean(clase));

/**
 * Pie de página: legal, clases (SEO interno), proyectos, contacto y NAP.
 */
export default function Footer() {
  return (
    <footer className="s-footer">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <nav aria-label="Información legal">
          <h2 className="s-muted s-mono text-sm uppercase tracking-wider">
            Información
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link href="/aviso-legal" className="s-link">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="s-link">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="/derechos" className="s-link">
                Derechos
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="s-link">
                Cookies
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Clases">
          <h2 className="s-muted s-mono text-sm uppercase tracking-wider">
            Clases
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {clasesFooter.map((clase) => (
              <li key={clase.slug}>
                <Link href={`/clases/${clase.slug}`} className="s-link">
                  {clase.nombre}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/clases" className="s-link">
                Ver todas
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Proyectos">
          <h2 className="s-muted s-mono text-sm uppercase tracking-wider">
            Proyectos
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {PROJECTS.map((project) => (
              <li key={project.url}>
                <a
                  href={project.url}
                  className="s-link"
                  target="_blank"
                  rel={
                    project.nofollow
                      ? "noopener noreferrer nofollow"
                      : "noopener noreferrer"
                  }
                >
                  {project.name}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Contacto">
          <h2 className="s-muted s-mono text-sm uppercase tracking-wider">
            Contacto
          </h2>
          <p className="s-muted mt-4 text-sm leading-relaxed">
            {LEGAL.titular}
            <br />
            Las Rozas de Madrid, Madrid
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <a href={`mailto:${SITE.email}`} className="s-link">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsappUrl}
                className="s-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.phoneDisplay}
                <span className="sr-only">
                  {" "}
                  (WhatsApp, se abre en una pestaña nueva)
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE.github}
                className="s-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                className="s-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="s-footer-rule">
        <p className="s-muted mx-auto w-full max-w-5xl px-6 py-5 text-sm">
          &copy; {new Date().getFullYear()} {SITE.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
