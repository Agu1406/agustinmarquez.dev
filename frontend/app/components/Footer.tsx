import Link from "next/link";
import { PROJECTS, SITE } from "../lib/site";

/**
 * Pie de página: navegación legal, proyectos y contacto.
 *
 * @author Agu1406 (https://github.com/Agu1406)
 * @version 2.0.0
 */
export default function Footer() {
  return (
    <footer className="s-line border-t">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-12 md:grid-cols-3">
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
              <Link href="/cookies" className="s-link">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/clases" className="s-link">
                Clases
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
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <a href={`mailto:${SITE.email}`} className="s-link">
                Correo
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

      <div className="s-line border-t">
        <p className="s-muted mx-auto w-full max-w-5xl px-6 py-5 text-sm">
          &copy; {new Date().getFullYear()} {SITE.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
