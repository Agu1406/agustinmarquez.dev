import { CAL, LEGAL } from "./site";

/**
 * Materias y lenguajes que se enseñan. Cada elemento genera
 * /clases/<slug>. El banco de preguntas, si existe, vive en lib/tests/.
 */
export type ClaseGrupo = "Lenguaje" | "Materia";

export type ClaseCover = {
  src: string;
  alt: string;
  /** Logo / marca tipográfica (contain), no foto a sangre. */
  kind: "logo" | "type";
};

export type Clase = {
  slug: string;
  nombre: string;
  grupo: ClaseGrupo;
  descripcion: string;
  /** Cover del hub /clases (logo o marca tipográfica; ver DESIGN.md). */
  image: ClaseCover;
  /** PDF en /public/clases/<slug>/, si hay material de contraste. */
  pdf?: { etiqueta: string; archivo: string };
  /**
   * Slug de un evento de Cal.com propio para esta materia. Sin él se usa
   * el evento general (CAL.eventoGeneral).
   */
  evento?: string;
};

/** Copy del hero de /clases (SEO + bio). */
export const CLASES_HUB = {
  eyebrow: "Clases particulares",
  title: "Clases de programación online en Madrid",
  description: `Me llamo ${LEGAL.titular}. Cursé DAW, DAM e Ingeniería Industrial y doy clases particulares online desde Madrid. Trabajo temario de Grado Superior y universitario: lenguajes, móvil, bases de datos y materias de apoyo. Hay apuntes, tests y reserva de hora; elige la asignatura abajo o entra ya en la ficha.`,
  metaDescription:
    "Clases de programación online en Madrid: Grado Superior y universitario. Apuntes, tests y reserva con Agustín Antonio Marquéz Piña.",
} as const;

function logo(slug: string, alt: string): ClaseCover {
  return { src: `/clases/covers/${slug}.svg`, alt, kind: "logo" };
}

function typeMark(slug: string, alt: string): ClaseCover {
  return { src: `/clases/covers/${slug}.svg`, alt, kind: "type" };
}

export const CLASES: readonly Clase[] = [
  {
    slug: "java",
    nombre: "Java",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de Java a nivel de Grado Superior y universitario: objetos, colecciones e interfaces. Trabajamos enunciados de clase y de examen. Sales sabiendo leer código y escribir el tuyo sin adivinar.",
    image: logo("java", "Logo de OpenJDK / Java"),
  },
  {
    slug: "python",
    nombre: "Python",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de Python para ciclo y universidad: sintaxis, estructuras y funciones. Los ejercicios siguen el mismo mapa que en Java para no empezar de cero. Ideal si ya programas en otro lenguaje o empiezas aquí.",
    image: logo("python", "Logo de Python"),
  },
  {
    slug: "c",
    nombre: "C",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de C de Grado Superior y grado: tipos, control de flujo, cadenas y tipos compuestos. Compilas, depuras y entiendes la memoria a bajo nivel. Sirve de base clara para C++ y sistemas.",
    image: logo("c", "Logo del lenguaje C"),
  },
  {
    slug: "cpp",
    nombre: "C++",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de C++ y la STL a nivel de ciclo y universitario: clases, contenedores e iteradores. Mismo ritmo de clase que el resto de la familia C. Enfocamos lo que pide el temario, no frameworks raros.",
    image: logo("cpp", "Logo de C++"),
  },
  {
    slug: "csharp",
    nombre: "C#",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de C# y .NET para Grado Superior y universidad: tipos, sintaxis y ejercicios. El mapa de clase espeja el de programación para que no se te mezcle con Java o C++. Útil para examen y para proyectos simples.",
    image: logo("csharp", "Logo de C#"),
  },
  {
    slug: "javascript",
    nombre: "JavaScript",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de JavaScript en el navegador, nivel ciclo y grado: el lenguaje, el DOM y eventos. Sin marco de moda: primero lo que el motor hace de verdad. Luego encajas cualquier librería con más criterio.",
    image: logo("javascript", "Logo de JavaScript"),
  },
  {
    slug: "php",
    nombre: "PHP",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de PHP en el servidor para DAW y temario universitario: formularios, sesión y el ciclo petición-respuesta. Ves cómo llega el dato, cómo se valida y cómo se responde. Pensado para clase y para páginas reales pequeñas.",
    image: logo("php", "Logo de PHP"),
  },
  {
    slug: "sql",
    nombre: "SQL",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de SQL a nivel de Grado Superior y universitario: consultas, claves y el modelo relacional. Enunciados tipo examen y consultas que puedes probar. Dejas de memorizar y empiezas a plantear el JOIN con sentido.",
    image: logo("sql", "Logo de MySQL (referencia SQL)"),
  },
  {
    slug: "linux",
    nombre: "Linux",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de Linux para ciclo y universidad: terminal, permisos, procesos y el sistema de archivos. Comandos con propósito, no listas para copiar. Sirve para clase, prácticas y el día a día en el PC.",
    image: logo("linux", "Logo de Linux"),
  },
  {
    slug: "android",
    nombre: "Android",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de Android con Kotlin a nivel de Grado Superior (PMDM) y prácticas de grado: actividades, persistencia e interfaces. Montamos pantallas que se pueden ejecutar. Sin perder el hilo del lenguaje.",
    image: logo("android", "Logo de Android"),
  },
  {
    slug: "flutter",
    nombre: "Flutter",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de Flutter y Dart para ciclo y universitario: widgets, estado y layouts. La otra rama del temario móvil, con los mismos hábitos de clase. Vas del widget vacío a una pantalla que se entiende.",
    image: logo("flutter", "Logo de Flutter"),
  },
  {
    slug: "javafx",
    nombre: "JavaFX",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de interfaces en Java con JavaFX, nivel Grado Superior y prácticas universitarias: escenas, controles y eventos. Conectas lo que ya sabes de Java con una UI visible. Útil para demos de escritorio.",
    image: typeMark("javafx", "Marca tipográfica de JavaFX"),
  },
  {
    slug: "react",
    nombre: "React",
    grupo: "Lenguaje",
    descripcion:
      "Teoría y práctica de React para DAW y grado: componentes, estado y el renderizado en el cliente. Empezamos por lo mínimo que hace falta para no ahogarte en el ecosistema. Luego amplías con criterio.",
    image: logo("react", "Logo de React"),
  },
  {
    slug: "ingles",
    nombre: "Inglés",
    grupo: "Materia",
    descripcion:
      "Teoría y práctica de inglés técnico de ciclo y universidad: gramática, vocabulario y comprensión. Textos y ejercicios pensados para clase y examen. El objetivo es leer y escribir lo que pide la asignatura, no relleno genérico.",
    image: typeMark("ingles", "Marca tipográfica de Inglés"),
  },
  {
    slug: "algebra",
    nombre: "Álgebra",
    grupo: "Materia",
    descripcion:
      "Teoría y práctica de álgebra universitaria y de apoyo a informática: matrices, sistemas y lo que pide el grado. Resolvemos a mano y comprobamos el razonamiento. Menos trucos de calculadora, más método.",
    image: typeMark("algebra", "Marca tipográfica de Álgebra"),
  },
  {
    slug: "calculo",
    nombre: "Cálculo",
    grupo: "Materia",
    descripcion:
      "Teoría y práctica de cálculo a nivel universitario: límites, derivadas e integrales. Enunciados de examen y pasos claros en la pizarra. Sirve para aprobar y para no perder el hilo en asignaturas siguientes.",
    image: typeMark("calculo", "Marca tipográfica de Cálculo"),
  },
  {
    slug: "laboratorio-informatica",
    nombre: "Laboratorio de Informática",
    grupo: "Materia",
    descripcion:
      "Teoría y práctica de laboratorio de Grado Superior y apoyo universitario: fuente, bases, unidades, memoria y reloj del procesador. Hay simulacro con soluciones para contrastar. Ideal antes del examen de la parte de desarrollo.",
    image: typeMark(
      "laboratorio-informatica",
      "Marca tipográfica de Laboratorio de Informática",
    ),
    pdf: {
      etiqueta: "Simulacro de ejercicios con soluciones (PDF)",
      archivo: "simulacro-ejercicios-soluciones.pdf",
    },
  },
];

export function getClase(slug: string): Clase | undefined {
  return CLASES.find((clase) => clase.slug === slug);
}

/** URL de reserva en Cal.com con la materia ya rellenada (campo `asignatura`). */
export function urlReserva(clase: Clase): string {
  const evento = clase.evento ?? CAL.eventoGeneral;
  const materia = encodeURIComponent(clase.nombre);
  return `${CAL.baseUrl}/${CAL.usuario}/${evento}?asignatura=${materia}`;
}
