import type { Metadata } from "next";
import Link from "next/link";
import { CLASES } from "../../lib/clases";
import { getTemario } from "../../lib/teoria";
import { getBanco } from "../../lib/tests/bancos";

export const metadata: Metadata = {
  title: "Clases",
  description:
    "Tests de los lenguajes y materias que enseño. Teoría y práctica, con modo examen o con ayuda.",
};

export default function ClasesIndex() {
  return (
    <div>
      <p className="s-muted s-mono text-sm">Clases particulares</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Una URL por materia.
      </h1>
      <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
        Elige el lenguaje o la asignatura. Donde hay apuntes puedes leer el
        temario; donde hay banco de preguntas, hacer un test en modo examen o
        con explicación al contestar.
      </p>

      <ol className="s-line mt-12 border-t">
        {CLASES.map((clase, index) => {
          const hayTest = getBanco(clase.slug).length > 0;
          const hayApuntes = Boolean(getTemario(clase.slug));
          const estado =
            hayTest && hayApuntes
              ? "Apuntes y test"
              : hayTest
                ? "Test listo"
                : hayApuntes
                  ? "Apuntes"
                  : clase.grupo;
          return (
            <li key={clase.slug} className="s-line border-b">
              <Link
                href={`/clases/${clase.slug}`}
                className="group grid gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-6"
              >
                <span className="s-muted s-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-2xl font-medium tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                    {clase.nombre}
                  </span>
                  <span className="s-muted mt-1 block">{clase.descripcion}</span>
                </span>
                <span className="s-accent s-mono text-sm">{estado}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
