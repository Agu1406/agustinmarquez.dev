/**
 * Ciclo formativo y sus asignaturas. Cada elemento de ASIGNATURAS genera una
 * sub-URL: /animacion/<slug>. La línea temporal de CIA (TimelineJS) tiene su
 * propia página en app/(site)/animacion/color-iluminacion-acabado/.
 */
export const CICLO = {
  nombre: "Animaciones 3D, Juegos y Entornos Interactivos",
  siglas: "A3DJEI",
} as const;

export type Asignatura = {
  slug: string;
  nombre: string;
  tipo: "Asignatura" | "Curso";
  /** Nombre de la carpeta local de apuntes y trabajos (solo referencia). */
  carpeta: string;
  descripcion: string;
  /** Enlaces a entregas: PDF en /public, vídeos en Mediateca, repositorios... */
  enlaces?: { etiqueta: string; url: string }[];
};

export const ASIGNATURAS: readonly Asignatura[] = [
  {
    slug: "animacion-elementos",
    nombre: "Animación de elementos",
    tipo: "Asignatura",
    carpeta: "animacion_elementos",
    descripcion: "Trabajos y entregas de Animación de elementos.",
  },
  {
    slug: "color-iluminacion-acabado",
    nombre: "Color, iluminación y acabado (CIA)",
    tipo: "Asignatura",
    carpeta: "color_iluminacion_acabado",
    descripcion:
      "Trabajos y entregas de Color, iluminación y acabado. Incluye la línea temporal de la luz escénica y cinematográfica.",
    enlaces: [
      {
        etiqueta: "PDF. La línea temporal de la luz escénica y cinematográfica",
        url: "/animacion/color-iluminacion-acabado/ACT01_01RA7_Marquez_PinaAgustinAntonio.pdf",
      },
    ],
  },
  {
    slug: "diseno-modelado",
    nombre: "Diseño y modelado",
    tipo: "Asignatura",
    carpeta: "diseño_modelado",
    descripcion: "Trabajos y entregas de Diseño y modelado.",
  },
  {
    slug: "fundamentos-diseno",
    nombre: "Fundamentos del diseño",
    tipo: "Asignatura",
    carpeta: "fundamentos_diseño",
    descripcion: "Trabajos y entregas de Fundamentos del diseño.",
  },
  {
    slug: "ingles",
    nombre: "Inglés",
    tipo: "Asignatura",
    carpeta: "ingles",
    descripcion: "Trabajos y entregas de Inglés.",
  },
  {
    slug: "proyectos-multimedia",
    nombre: "Proyectos multimedia",
    tipo: "Asignatura",
    carpeta: "proyectos_multimedia",
    descripcion: "Trabajos y entregas de Proyectos multimedia.",
  },
  {
    slug: "blender-creator-3d",
    nombre: "Complete Blender Creator 3D",
    tipo: "Curso",
    carpeta: "udemy_complete_blender_creator_3d",
    descripcion:
      "Curso de Udemy sobre Blender 3D. Aquí van los ejercicios y proyectos que voy completando.",
  },
];

export function getAsignatura(slug: string): Asignatura | undefined {
  return ASIGNATURAS.find((a) => a.slug === slug);
}
