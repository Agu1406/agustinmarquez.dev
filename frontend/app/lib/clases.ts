/**
 * Materias y lenguajes que se enseñan. Cada elemento genera
 * /clases/<slug>. El banco de preguntas, si existe, vive en lib/tests/.
 */
export type ClaseGrupo = "Lenguaje" | "Materia";

export type Clase = {
  slug: string;
  nombre: string;
  grupo: ClaseGrupo;
  descripcion: string;
  /** PDF en /public/clases/<slug>/, si hay material de contraste. */
  pdf?: { etiqueta: string; archivo: string };
};

export const CLASES: readonly Clase[] = [
  {
    slug: "java",
    nombre: "Java",
    grupo: "Lenguaje",
    descripcion: "Programación 0485: fundamentos, objetos, colecciones e interfaces.",
  },
  {
    slug: "python",
    nombre: "Python",
    grupo: "Lenguaje",
    descripcion: "Sintaxis, estructuras y el mapa de clase alineado con Java.",
  },
  {
    slug: "c",
    nombre: "C",
    grupo: "Lenguaje",
    descripcion: "C11: tipos, control de flujo, cadenas y tipos compuestos.",
  },
  {
    slug: "cpp",
    nombre: "C++",
    grupo: "Lenguaje",
    descripcion: "C++ y STL, con el mismo mapa de clase que el resto de la familia.",
  },
  {
    slug: "csharp",
    nombre: "C#",
    grupo: "Lenguaje",
    descripcion: ".NET y C#, espejo del temario de programación.",
  },
  {
    slug: "javascript",
    nombre: "JavaScript",
    grupo: "Lenguaje",
    descripcion: "DWEC: el lenguaje en el navegador, sin marco de moda.",
  },
  {
    slug: "php",
    nombre: "PHP",
    grupo: "Lenguaje",
    descripcion: "Servidor, formularios y el ciclo petición-respuesta.",
  },
  {
    slug: "sql",
    nombre: "SQL",
    grupo: "Lenguaje",
    descripcion: "Consultas, claves y el modelo relacional.",
  },
  {
    slug: "linux",
    nombre: "Linux",
    grupo: "Lenguaje",
    descripcion: "Terminal, permisos, procesos y el sistema de archivos.",
  },
  {
    slug: "android",
    nombre: "Android",
    grupo: "Lenguaje",
    descripcion: "PMDM con Kotlin: actividades, persistencia e interfaces.",
  },
  {
    slug: "flutter",
    nombre: "Flutter",
    grupo: "Lenguaje",
    descripcion: "Dart y widgets. La otra rama del temario PMDM.",
  },
  {
    slug: "javafx",
    nombre: "JavaFX",
    grupo: "Lenguaje",
    descripcion: "Interfaces en Java: escenas, controles y eventos.",
  },
  {
    slug: "react",
    nombre: "React",
    grupo: "Lenguaje",
    descripcion: "Componentes, estado y el renderizado en el cliente.",
  },
  {
    slug: "ingles",
    nombre: "Inglés",
    grupo: "Materia",
    descripcion: "Gramática, vocabulario técnico y comprensión para clase.",
  },
  {
    slug: "algebra",
    nombre: "Álgebra",
    grupo: "Materia",
    descripcion: "Matrices, sistemas y el álgebra que pide un grado de informática.",
  },
  {
    slug: "calculo",
    nombre: "Cálculo",
    grupo: "Materia",
    descripcion: "Límites, derivadas e integrales con enunciados de examen.",
  },
  {
    slug: "laboratorio-informatica",
    nombre: "Laboratorio de Informática",
    grupo: "Materia",
    descripcion:
      "Fuente, cambios de base, unidades, memoria y reloj del procesador. Simulacro de la parte de desarrollo.",
    pdf: {
      etiqueta: "Simulacro de ejercicios con soluciones (PDF)",
      archivo: "simulacro-ejercicios-soluciones.pdf",
    },
  },
];

export function getClase(slug: string): Clase | undefined {
  return CLASES.find((clase) => clase.slug === slug);
}
