import { ae } from "./ae";
import { blender } from "./blender";
import { cia } from "./cia";
import { ddma } from "./ddma";
import { fdj } from "./fdj";
import { rpmi } from "./rpmi";
import type { Asignatura, ItemAsignatura, Unidad } from "./types";

export { CICLO, ETIQUETA_TIPO } from "./types";
export type {
  Asignatura,
  EstadoItem,
  ItemAsignatura,
  TipoAsignatura,
  TipoItem,
  Unidad,
} from "./types";

/** Cinco módulos del ciclo, más el curso de Blender. Inglés no entra aquí. */
export const ASIGNATURAS: readonly Asignatura[] = [
  ddma,
  ae,
  cia,
  rpmi,
  fdj,
  blender,
];

export function getAsignatura(slug: string): Asignatura | undefined {
  return ASIGNATURAS.find((a) => a.slug === slug);
}

export function itemsPublicados(unidad: Unidad): ItemAsignatura[] {
  return unidad.items.filter((item) => item.estado === "publicado");
}

export function abreEnNuevaPestana(item: ItemAsignatura): boolean {
  if (!item.href) return false;
  if (item.externo) return true;
  return (
    /^https?:\/\//.test(item.href) || item.href.toLowerCase().endsWith(".pdf")
  );
}
