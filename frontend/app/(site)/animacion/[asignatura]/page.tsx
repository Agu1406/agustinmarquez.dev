import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ASIGNATURAS,
  ETIQUETA_TIPO,
  abreEnNuevaPestana,
  getAsignatura,
  itemsPublicados,
  type ItemAsignatura,
} from "../../../lib/asignaturas";

type Props = { params: Promise<{ asignatura: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ASIGNATURAS.map((a) => ({ asignatura: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asignatura } = await params;
  const data = getAsignatura(asignatura);
  if (!data) return {};
  const title = data.siglas ? `${data.siglas}. ${data.nombre}` : data.nombre;
  return { title, description: data.descripcion };
}

export default async function AsignaturaPage({ params }: Props) {
  const { asignatura: slug } = await params;
  const asignatura = getAsignatura(slug);
  if (!asignatura) notFound();

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
        {asignatura.siglas ? (
          <p className="s-muted s-mono mt-4 text-sm">{asignatura.siglas}</p>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {asignatura.nombre}
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          {asignatura.descripcion}
        </p>
      </div>

      {asignatura.unidades.length > 0 ? (
        asignatura.unidades.map((unidad) => {
          const items = itemsPublicados(unidad);
          return (
            <section key={unidad.id} aria-labelledby={`unidad-${unidad.id}`}>
              <h2
                id={`unidad-${unidad.id}`}
                className="s-muted s-mono text-sm uppercase tracking-wider"
              >
                {unidad.titulo}
              </h2>
              {items.length > 0 ? (
                <ol className="s-line mt-6 border-t">
                  {items.map((item, index) => (
                    <li key={item.id} className="s-line border-b">
                      <FilaItem item={item} index={index} />
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="s-muted mt-6">
                  Todavía no hay material publicado en esta unidad.
                </p>
              )}
            </section>
          );
        })
      ) : (
        <p className="s-muted">Todavía no hay entregas publicadas aquí.</p>
      )}
    </div>
  );
}

function FilaItem({ item, index }: { item: ItemAsignatura; index: number }) {
  const fila =
    "group grid gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-6";
  const tituloClase = item.href
    ? "block text-2xl font-medium tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4"
    : "block text-2xl font-medium tracking-tight";

  const interior = (
    <>
      <span className="s-muted s-mono text-sm">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className={tituloClase}>{item.titulo}</span>
      <span className="s-accent s-mono text-sm">{ETIQUETA_TIPO[item.tipo]}</span>
    </>
  );

  if (!item.href) {
    return <div className={fila}>{interior}</div>;
  }

  if (abreEnNuevaPestana(item)) {
    return (
      <a
        href={item.href}
        className={fila}
        target="_blank"
        rel="noopener noreferrer"
      >
        {interior}
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    );
  }

  return (
    <Link href={item.href} className={fila}>
      {interior}
    </Link>
  );
}
