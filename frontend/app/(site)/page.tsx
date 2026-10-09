import Link from "next/link";
import { PROJECTS, SITE } from "../lib/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      <section aria-labelledby="titulo">
        <p className="s-muted s-mono text-sm">{SITE.name}</p>
        <h1
          id="titulo"
          className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          Desarrollo webs para negocios que quieren que les encuentren.
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          Diseño y programo sitios web para negocios locales y tiendas. Aquí
          tienes algunos que ya están publicados. Mi portfolio completo está en
          construcción.
        </p>
        <p className="mt-8">
          <a
            href={`mailto:${SITE.email}`}
            className="s-link text-lg font-medium"
          >
            {SITE.email}
          </a>
        </p>
      </section>

      <section id="proyectos" aria-labelledby="titulo-proyectos" className="scroll-mt-8">
        <h2
          id="titulo-proyectos"
          className="s-muted s-mono text-sm uppercase tracking-wider"
        >
          Proyectos publicados
        </h2>
        <ol className="s-line mt-6 border-t">
          {PROJECTS.map((project, index) => (
            <li key={project.url} className="s-line border-b">
              <a
                href={project.url}
                target="_blank"
                rel={
                  project.nofollow
                    ? "noopener noreferrer nofollow"
                    : "noopener noreferrer"
                }
                className="group grid gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-6"
              >
                <span className="s-muted s-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-2xl font-medium tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                    {project.name}
                  </span>
                  <span className="s-muted mt-1 block">
                    {project.description}
                  </span>
                </span>
                <span className="s-accent s-mono text-sm">
                  {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="titulo-demos">
        <h2
          id="titulo-demos"
          className="s-muted s-mono text-sm uppercase tracking-wider"
        >
          Demos
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Prototipos con datos de ejemplo que enseño a clientes antes de
          empezar un proyecto: una landing para una barbería y un portal de
          clases de idiomas.
        </p>
        <p className="mt-4">
          <Link href="/demo" className="s-link font-medium">
            Ver las demos
          </Link>
        </p>
      </section>

      <section id="contacto" aria-labelledby="titulo-contacto" className="scroll-mt-8">
        <h2
          id="titulo-contacto"
          className="s-muted s-mono text-sm uppercase tracking-wider"
        >
          Contacto
        </h2>
        <ul className="mt-6 flex flex-col gap-3 text-lg">
          <li>
            <a href={`mailto:${SITE.email}`} className="s-link">
              {SITE.email}
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
        </ul>
      </section>
    </div>
  );
}
