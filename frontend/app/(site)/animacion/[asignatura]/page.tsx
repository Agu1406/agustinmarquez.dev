import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TimelineEmbed from "../../../components/TimelineEmbed";
import { ASIGNATURAS, getAsignatura } from "../../../lib/asignaturas";
import { TIMELINES } from "../../../lib/timelines";

type Props = { params: Promise<{ asignatura: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ASIGNATURAS.map((a) => ({ asignatura: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asignatura } = await params;
  const data = getAsignatura(asignatura);
  if (!data) return {};
  return { title: data.nombre, description: data.descripcion };
}

export default async function AsignaturaPage({ params }: Props) {
  const { asignatura: slug } = await params;
  const asignatura = getAsignatura(slug);
  if (!asignatura) notFound();

  const timeline = TIMELINES[slug];

  return (
    <div className="flex flex-col gap-12">
      <div>
        <p className="s-muted text-sm">
          <Link href="/animacion" className="s-link">
            Animación 3D
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{asignatura.tipo}</span>
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {asignatura.nombre}
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          {asignatura.descripcion}
        </p>
      </div>

      {asignatura.enlaces && asignatura.enlaces.length > 0 && (
        <section aria-labelledby="titulo-enlaces">
          <h2
            id="titulo-enlaces"
            className="s-muted s-mono text-sm uppercase tracking-wider"
          >
            Entregas
          </h2>
          <ul className="mt-6 flex flex-col gap-3 text-lg">
            {asignatura.enlaces.map((enlace) => (
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

      {timeline ? (
        <section aria-labelledby="titulo-timeline">
          <h2
            id="titulo-timeline"
            className="s-muted s-mono text-sm uppercase tracking-wider"
          >
            Línea temporal
          </h2>
          <div className="mt-6">
            <TimelineEmbed
              data={timeline}
              label={`Línea temporal: ${asignatura.nombre}`}
            />
          </div>
        </section>
      ) : (
        <p className="s-muted">Todavía no hay entregas publicadas aquí.</p>
      )}
    </div>
  );
}
