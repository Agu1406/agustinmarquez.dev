import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
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
    title: clase.nombre,
    description: temario.descripcion,
  };
}

export default async function TeoriaIndexPage({ params }: Props) {
  const { asignatura: slug } = await params;
  const clase = getClase(slug);
  const temario = getTemario(slug);
  if (!clase || !temario) notFound();
  redirect(`/clases/${slug}`);
}
