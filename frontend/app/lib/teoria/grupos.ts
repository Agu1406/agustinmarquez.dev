import type { TeoriaTema } from "./types";

export function gruposPorUnidad(temas: TeoriaTema[]) {
  if (!temas.some((tema) => tema.unidad)) {
    return [{ titulo: "Temas", temas }];
  }

  const grupos: { titulo: string; temas: TeoriaTema[] }[] = [];
  for (const tema of temas) {
    const titulo = [tema.evaluacion, tema.unidad].filter(Boolean).join(" · ");
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.titulo === titulo) ultimo.temas.push(tema);
    else grupos.push({ titulo: titulo || "Temas", temas: [tema] });
  }
  return grupos;
}
