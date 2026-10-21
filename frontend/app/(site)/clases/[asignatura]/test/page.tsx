import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CLASES, getClase } from "../../../../lib/clases";
import { filtrarBanco, getBanco } from "../../../../lib/tests/bancos";
import { parseConfig } from "../../../../lib/tests/config";
import TestPlayer from "./TestPlayer";

type Props = {
  params: Promise<{ asignatura: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return CLASES.map((clase) => ({ asignatura: clase.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asignatura } = await params;
  const clase = getClase(asignatura);
  if (!clase) return {};
  return {
    title: `Test · ${clase.nombre}`,
    description: `Test de ${clase.nombre}.`,
    robots: { index: false, follow: false },
  };
}

export default async function TestPage({ params, searchParams }: Props) {
  const { asignatura: slug } = await params;
  const clase = getClase(slug);
  if (!clase) notFound();

  const config = parseConfig(await searchParams);
  const preguntas = filtrarBanco(getBanco(slug), config.alcance);

  if (preguntas.length === 0) {
    return (
      <div>
        <p className="s-muted text-sm">
          <Link href="/clases" className="s-link">
            Clases
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/clases/${slug}`} className="s-link">
            {clase.nombre}
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          No hay preguntas con ese filtro
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg">
          Vuelve a la ficha y elige otro tipo, o espera a que haya banco para
          esta materia.
        </p>
        <p className="mt-6">
          <Link href={`/clases/${slug}`} className="s-link">
            Volver a {clase.nombre}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <TestPlayer
      slug={slug}
      nombre={clase.nombre}
      config={config}
      preguntas={preguntas}
    />
  );
}
