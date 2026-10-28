import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CLASES, getClase } from "../../../../lib/clases";
import { getTemario } from "../../../../lib/teoria";

type Props = { params: Promise<{ asignatura: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CLASES.filter((clase) => getTemario(clase.slug)).map((clase) => ({
    asignatura: clase.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asignatura } = await params;
  const clase = getClase(asignatura);
  const temario = getTemario(asignatura);
  if (!clase || !temario) return {};
  return {
    title: `Apuntes de ${clase.nombre}`,
    description: temario.descripcion,
  };
}

export default async function TeoriaIndexPage({ params }: Props) {
  const { asignatura: slug } = await params;
  const clase = getClase(slug);
  const temario = getTemario(slug);
  if (!clase || !temario) notFound();

  const temas = [...temario.temas].sort((a, b) => a.orden - b.orden);

  return (
    <div className="flex flex-col gap-12">
      <div>
        <p className="s-muted text-sm">
          <Link href="/clases" className="s-link">
            Clases
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/clases/${slug}`} className="s-link">
            {clase.nombre}
          </Link>
          <span aria-hidden="true"> / </span>
          <span>Apuntes</span>
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Apuntes de {clase.nombre}
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          {temario.descripcion}
        </p>
      </div>

      <section aria-labelledby="titulo-estaciones">
        <h2
          id="titulo-estaciones"
          className="s-muted s-mono text-sm uppercase tracking-wider"
        >
          Temas
        </h2>
        <ol className="s-line mt-6 border-t">
          {temas.map((tema) => (
            <li key={tema.slug} className="s-line border-b">
              <Link
                href={`/clases/${slug}/teoria/${tema.slug}`}
                className="group grid gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-6"
              >
                <span className="s-muted s-mono text-sm">
                  {String(tema.orden).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-2xl font-medium tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                    {tema.titulo}
                  </span>
                  <span className="s-muted mt-1 block">{tema.resumen}</span>
                </span>
                <span className="s-muted s-mono text-sm">
                  {tema.nivel} · {tema.lecturaMin} min
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <p className="s-muted max-w-xl">
        <Link href={`/clases/${slug}`} className="s-link">
          Volver a la ficha de {clase.nombre}
        </Link>
        {" · "}
        <Link href={`/clases/${slug}/test`} className="s-link">
          Ir al test
        </Link>
      </p>
    </div>
  );
}
