import type { Metadata } from "next";
import Link from "next/link";
import { getAsignatura } from "../../../lib/asignaturas";
import LineaTemporal from "./linea-temporal";

export const metadata: Metadata = {
  title: "Color, iluminación y acabado (CIA)",
  description:
    "La línea temporal de la luz escénica y cinematográfica (ACT01-01RA7).",
};

export default function CiaPage() {
  const enlaces = getAsignatura("color-iluminacion-acabado")?.enlaces;

  return (
    <div className="flex flex-col gap-12">
      <div>
        <p className="s-muted text-sm">
          <Link href="/animacion" className="s-link">
            Animación 3D
          </Link>
          <span aria-hidden="true"> / </span>
          <span>Asignatura</span>
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Color, iluminación y acabado (CIA)
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          ACT01-01RA7. La línea temporal de la luz escénica y cinematográfica.
        </p>
      </div>

      {enlaces && enlaces.length > 0 && (
        <section aria-labelledby="titulo-enlaces">
          <h2
            id="titulo-enlaces"
            className="s-muted s-mono text-sm uppercase tracking-wider"
          >
            Entregas
          </h2>
          <ul className="mt-6 flex flex-col gap-3 text-lg">
            {enlaces.map((enlace) => (
              <li key={enlace.url}>
                <a
                  href={enlace.url}
                  className="s-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {enlace.etiqueta}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="titulo-timeline">
        <h2
          id="titulo-timeline"
          className="s-muted s-mono text-sm uppercase tracking-wider"
        >
          Línea temporal
        </h2>
        <div className="mt-6">
          <LineaTemporal />
        </div>
      </section>
    </div>
  );
}
