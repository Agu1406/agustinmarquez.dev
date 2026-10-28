import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TeoriaRenderer from "../../../components/TeoriaRenderer";
import { getClase } from "../../../../../lib/clases";
import { allTemaParams, getTemario, getTema } from "../../../../../lib/teoria";

type Props = { params: Promise<{ asignatura: string; tema: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allTemaParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asignatura, tema: temaSlug } = await params;
  const tema = getTema(asignatura, temaSlug);
  if (!tema) return {};
  return {
    title: tema.titulo,
    description: tema.resumen,
  };
}

export default async function TeoriaTemaPage({ params }: Props) {
  const { asignatura: slug, tema: temaSlug } = await params;
  const clase = getClase(slug);
  const temario = getTemario(slug);
  const tema = getTema(slug, temaSlug);
  if (!clase || !temario || !tema) notFound();

  const ordenados = [...temario.temas].sort((a, b) => a.orden - b.orden);
  const indice = ordenados.findIndex((t) => t.slug === temaSlug);
  const anterior = indice > 0 ? ordenados[indice - 1] : null;
  const siguiente =
    indice >= 0 && indice < ordenados.length - 1 ? ordenados[indice + 1] : null;

  return (
    <article className="flex flex-col gap-10">
      <header>
        <p className="s-muted text-sm">
          <Link href="/clases" className="s-link">
            Clases
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/clases/${slug}`} className="s-link">
            {clase.nombre}
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/clases/${slug}/teoria`} className="s-link">
            Apuntes
          </Link>
        </p>
        <p className="s-muted s-mono mt-4 text-sm">
          Tema {String(tema.orden).padStart(2, "0")} · {tema.nivel} ·{" "}
          {tema.lecturaMin} min lectura
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {tema.titulo}
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          {tema.resumen}
        </p>
      </header>

      <TeoriaRenderer bloques={tema.bloques} />

      <nav
        className="s-teoria-nav s-line flex flex-col gap-4 border-t pt-8 md:flex-row md:justify-between"
        aria-label="Temas anterior y siguiente"
      >
        {anterior ? (
          <Link href={`/clases/${slug}/teoria/${anterior.slug}`} className="s-link">
            ← {anterior.titulo}
          </Link>
        ) : (
          <span />
        )}
        {siguiente ? (
          <Link
            href={`/clases/${slug}/teoria/${siguiente.slug}`}
            className="s-link md:text-right"
          >
            {siguiente.titulo} →
          </Link>
        ) : (
          <Link href={`/clases/${slug}`} className="s-link md:text-right">
            Ficha y test →
          </Link>
        )}
      </nav>
    </article>
  );
}
