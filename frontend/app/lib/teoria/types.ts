export type TeoriaNivel = "Principiante" | "Intermedio" | "Avanzado";

export type TeoriaEvaluacion = "EV1" | "EV2" | "EV3";

export type EjercicioDificultad = "Fácil" | "Medio" | "Difícil";

/** Bloque de contenido dentro de un tema (sin Markdown en runtime). */
export type TeoriaBloque =
  | { kind: "p"; texto: string }
  | { kind: "h3"; texto: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "code"; archivo?: string; codigo: string }
  | { kind: "nota"; titulo: string; texto: string }
  | { kind: "tabla"; caption?: string; columnas: string[]; filas: string[][] }
  | {
      kind: "ejercicio";
      titulo: string;
      dificultad: EjercicioDificultad;
      enunciado: string;
      entrada?: string;
      salida?: string;
      solucion: string;
    };

export type TeoriaTema = {
  slug: string;
  orden: number;
  titulo: string;
  resumen: string;
  nivel: TeoriaNivel;
  /** Minutos de lectura orientativos. */
  lecturaMin: number;
  /** Evaluación del centro, si el temario va partido así. */
  evaluacion?: TeoriaEvaluacion;
  /** Unidad de trabajo, por ejemplo "UT1 · Elementos de un programa". */
  unidad?: string;
  bloques: readonly TeoriaBloque[];
};

export type TeoriaTemario = {
  slug: string;
  titulo: string;
  descripcion: string;
  temas: readonly TeoriaTema[];
};
