import type { Metadata } from "next";
import Link from "next/link";
import { HomePanel } from "../../components/HomePanel";
import { CLASES, CLASES_HUB, urlReserva } from "../../lib/clases";
import { buildPageMetadata } from "../../lib/seo";
import { getTemario } from "../../lib/teoria";
import { getBanco } from "../../lib/tests/bancos";

export const metadata: Metadata = buildPageMetadata({
  title: CLASES_HUB.title,
  description: CLASES_HUB.metaDescription,
  path: "/clases",
});

export default function ClasesIndex() {
  return (
    <div className="s-clases-home">
      <section aria-labelledby="titulo-clases" className="s-band">
        <div className="s-band-inner max-w-3xl">
          <p className="s-muted s-mono text-sm">{CLASES_HUB.eyebrow}</p>
          <h1
            id="titulo-clases"
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            {CLASES_HUB.title}
          </h1>
          <p className="s-muted mt-6 text-lg leading-relaxed">
            {CLASES_HUB.description}
          </p>
        </div>
      </section>

      {CLASES.map((clase, index) => {
        const dark = index % 2 === 1;
        const reverse = index % 2 === 1;
        const titleId = `titulo-clase-${clase.slug}`;
        const hayTest = getBanco(clase.slug).length > 0;
        const hayApuntes = Boolean(getTemario(clase.slug));
        const estado =
          hayTest && hayApuntes
            ? "Apuntes y test"
            : hayTest
              ? "Test listo"
              : hayApuntes
                ? "Apuntes"
                : clase.grupo;

        return (
          <HomePanel
            key={clase.slug}
            labelledBy={titleId}
            dark={dark}
            reverse={reverse}
            image={clase.image}
            className="scroll-mt-16"
          >
            <p className="s-muted s-mono text-sm uppercase tracking-wider">
              {String(index + 1).padStart(2, "0")} · {estado}
            </p>
            <h2
              id={titleId}
              className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
            >
              {clase.nombre}
            </h2>
            <p className="s-muted mt-4 text-lg leading-relaxed">
              {clase.descripcion}
            </p>
            <div className="s-cta-row mt-6">
              <a
                href={urlReserva(clase)}
                className="s-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar
                <span className="sr-only">
                  {" "}
                  clase de {clase.nombre} (se abre en una pestaña nueva)
                </span>
              </a>
              <Link href={`/clases/${clase.slug}`} className="s-btn">
                Ver más
              </Link>
            </div>
          </HomePanel>
        );
      })}

      <section className="s-band" aria-label="Créditos de marcas">
        <div className="s-band-inner max-w-3xl">
          <p className="s-muted text-sm leading-relaxed">
            Logos: marcas de sus titulares; uso informativo en el catálogo de
            clases. No implica afiliación ni endorsement. Detalle de fuentes en{" "}
            <Link href="/aviso-legal" className="s-link">
              aviso legal
            </Link>{" "}
            y en el archivo DESIGN.md del repositorio.
          </p>
        </div>
      </section>
    </div>
  );
}
