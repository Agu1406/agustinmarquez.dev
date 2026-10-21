import type { TestAlcance, TestConfig, TestModo } from "./types";

function uno(valor: string | string[] | undefined): string | undefined {
  if (Array.isArray(valor)) return valor[0];
  return valor;
}

export function parseConfig(
  searchParams: Record<string, string | string[] | undefined>,
): TestConfig {
  const tipo = uno(searchParams.tipo);
  const modo = uno(searchParams.modo);
  const orden = uno(searchParams.orden);
  const cronometro = uno(searchParams.cronometro);

  const alcance: TestAlcance =
    tipo === "teoria" || tipo === "practica" ? tipo : "ambas";
  const modoNormalizado: TestModo = modo === "examen" ? "examen" : "ayuda";

  return {
    alcance,
    modo: modoNormalizado,
    aleatorio: orden !== "fijo",
    cronometro: cronometro === "si",
  };
}

export function etiquetaAlcance(alcance: TestAlcance): string {
  if (alcance === "teoria") return "Teoría";
  if (alcance === "practica") return "Práctica";
  return "Teoría y práctica";
}

export function etiquetaModo(modo: TestModo): string {
  return modo === "examen" ? "Examen" : "Ayuda";
}
