export type TeoriaNivel = "Principiante" | "Intermedio" | "Avanzado";

/** Bloque de contenido dentro de un tema (sin Markdown en runtime). */
export type TeoriaBloque =
  | { kind: "p"; texto: string }
  | { kind: "h3"; texto: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "code"; archivo?: string; codigo: string }
  | { kind: "nota"; titulo: string; texto: string };

export type TeoriaTema = {
  slug: string;
  orden: number;
  titulo: string;
  resumen: string;
  nivel: TeoriaNivel;
  /** Minutos de lectura orientativos. */
  lecturaMin: number;
  bloques: readonly TeoriaBloque[];
};

export type TeoriaTemario = {
  slug: string;
  titulo: string;
  descripcion: string;
  temas: readonly TeoriaTema[];
};
