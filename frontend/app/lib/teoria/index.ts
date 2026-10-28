import { temarioC } from "./temarios/c";
import type { TeoriaTemario, TeoriaTema } from "./types";

const TEMARIOS: Record<string, TeoriaTemario> = {
  c: temarioC,
};

export function getTemario(slug: string): TeoriaTemario | undefined {
  return TEMARIOS[slug];
}

export function getTema(slug: string, temaSlug: string): TeoriaTema | undefined {
  const temario = getTemario(slug);
  return temario?.temas.find((tema) => tema.slug === temaSlug);
}

export function listTemariosPublicados(): string[] {
  return Object.keys(TEMARIOS);
}

export function allTemaParams(): { asignatura: string; tema: string }[] {
  const params: { asignatura: string; tema: string }[] = [];
  for (const slug of listTemariosPublicados()) {
    const temario = getTemario(slug);
    if (!temario) continue;
    for (const tema of temario.temas) {
      params.push({ asignatura: slug, tema: tema.slug });
    }
  }
  return params;
}
