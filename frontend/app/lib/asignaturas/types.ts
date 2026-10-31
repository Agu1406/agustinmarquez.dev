/**
 * Ciclo formativo A3DJEI y el modelo de cada asignatura: unidades con ítems
 * (teoría, práctica, actividad, entrega). Un ítem en `borrador` no se lista;
 * `publicado` sí. Las entregas viven en /public/animacion/<slug>/ o en una
 * ruta hija (como la línea temporal de CIA).
 */
export const CICLO = {
  nombre: "Animaciones 3D, Juegos y Entornos Interactivos",
  siglas: "A3DJEI",
} as const;

export type TipoItem = "teoria" | "practica" | "actividad" | "entrega";
export type EstadoItem = "borrador" | "publicado";
export type TipoAsignatura = "Asignatura" | "Curso";

export type ItemAsignatura = {
  id: string;
  titulo: string;
  tipo: TipoItem;
  estado: EstadoItem;
  /** Ruta interna, PDF en /public o URL externa (Mediateca). */
  href?: string;
  /** Enlace fuera del sitio (Mediateca, repositorio…). */
  externo?: boolean;
};

export type Unidad = {
  id: string;
  titulo: string;
  items: ItemAsignatura[];
};

export type Asignatura = {
  slug: string;
  nombre: string;
  siglas?: string;
  tipo: TipoAsignatura;
  /** Nombre de la carpeta local de apuntes y trabajos (solo referencia). */
  carpeta: string;
  descripcion: string;
  unidades: Unidad[];
};

export const ETIQUETA_TIPO: Record<TipoItem, string> = {
  teoria: "Teoría",
  practica: "Práctica",
  actividad: "Actividad",
  entrega: "Entrega",
};
