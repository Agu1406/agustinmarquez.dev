import { c } from "./c";
import { laboratorioInformatica } from "./laboratorio-informatica";
import type { Pregunta, PreguntaTipo, TestAlcance } from "./types";

const BANCOS: Record<string, readonly Pregunta[]> = {
  c,
  "laboratorio-informatica": laboratorioInformatica,
};

export function getBanco(slug: string): readonly Pregunta[] {
  return BANCOS[slug] ?? [];
}

export function filtrarBanco(
  preguntas: readonly Pregunta[],
  alcance: TestAlcance,
): Pregunta[] {
  if (alcance === "ambas") return [...preguntas];
  return preguntas.filter((pregunta) => pregunta.tipo === alcance);
}

export function contarPorTipo(preguntas: readonly Pregunta[]): Record<PreguntaTipo, number> {
  return {
    teoria: preguntas.filter((pregunta) => pregunta.tipo === "teoria").length,
    practica: preguntas.filter((pregunta) => pregunta.tipo === "practica").length,
  };
}
