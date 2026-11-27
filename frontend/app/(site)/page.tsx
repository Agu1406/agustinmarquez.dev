import Image from "next/image";
import { HomePanel } from "../components/HomePanel";
import { HOME_HERO_IMAGE, PROJECTS, SITE } from "../lib/site";
import { HomeMotion } from "./HomeMotion";

export default function Home() {
  return (
    <HomeMotion>
      <div className="s-home">
        <section aria-labelledby="titulo" className="s-band s-band-dark">
          <div className="s-hero-diagonal">
            <div className="s-hero-diagonal__copy">
              <p
                data-home="brand"
                className="s-mono text-xl font-bold tracking-tight md:text-2xl"
              >
                {SITE.name}
              </p>
              <h1
                id="titulo"
                data-home="title"
                className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
              >
                Desarrollo webs para negocios que quieren que les encuentren.
              </h1>
              <p
                data-home="lead"
                className="s-muted mt-6 text-lg leading-relaxed"
              >
                Diseño y programo sitios web para negocios locales y tiendas.
                Aquí tienes algunos que ya están publicados. Mi portfolio
                completo está en construcción.
              </p>
              <div data-home="cta" className="s-cta-row mt-8">
                <a href={`mailto:${SITE.email}`} className="s-btn">
                  ¡Enviar un correo!
                </a>
                <a
                  href={SITE.whatsappUrl}
                  className="s-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                  <span className="sr-only">
                    {" "}
                    ({SITE.phoneDisplay}, se abre en una pestaña nueva)
                  </span>
                </a>
              </div>
            </div>
            <div className="s-hero-diagonal__media" data-home="hero-media">
              <Image
                src={HOME_HERO_IMAGE.src}
                alt={HOME_HERO_IMAGE.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {PROJECTS.map((project, index) => {
          const dark = index % 2 === 1;
          const reverse = index % 2 === 1;
          const titleId = `titulo-proyecto-${index}`;
          const host = project.url
            .replace(/^https?:\/\/(www\.)?/, "")
            .replace(/\/$/, "");

          return (
            <HomePanel
              key={project.url}
              id={index === 0 ? "proyectos" : undefined}
              labelledBy={titleId}
              dark={dark}
              reverse={reverse}
              image={project.image}
              className="scroll-mt-16"
            >
              <p className="s-muted s-mono text-sm uppercase tracking-wider">
                {String(index + 1).padStart(2, "0")} · Proyecto
              </p>
              <h2
                id={titleId}
                className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
              >
                {project.name}
              </h2>
              <p className="s-muted mt-4 text-lg leading-relaxed">
                {project.description}
              </p>
              <p className="mt-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel={
                    project.nofollow
                      ? "noopener noreferrer nofollow"
                      : "noopener noreferrer"
                  }
                  className="s-btn"
                >
                  ¡Visitar el sitio!
                  <span className="sr-only">
                    {" "}
                    ({host}, se abre en una pestaña nueva)
                  </span>
                </a>
              </p>
            </HomePanel>
          );
        })}

        <section
          id="contacto"
          aria-labelledby="titulo-contacto"
          data-home="panel"
          className="s-band scroll-mt-16"
        >
          <div className="s-band-inner max-w-3xl">
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
                  href={SITE.whatsappUrl}
                  className="s-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {SITE.phoneDisplay}
                  <span className="sr-only">
                    {" "}
                    (se abre en una pestaña nueva)
                  </span>
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
                  <span className="sr-only">
                    {" "}
                    (se abre en una pestaña nueva)
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
                  <span className="sr-only">
                    {" "}
                    (se abre en una pestaña nueva)
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </HomeMotion>
  );
}
