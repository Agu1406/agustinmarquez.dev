import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CLASES, getClase } from "../../../lib/clases";
import { contarPorTipo, getBanco } from "../../../lib/tests/bancos";

type Props = { params: Promise<{ asignatura: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CLASES.map((clase) => ({ asignatura: clase.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asignatura } = await params;
  const clase = getClase(asignatura);
  if (!clase) return {};
  return {
    title: clase.nombre,
    description: clase.descripcion,
  };
}

export default async function ClasePage({ params }: Props) {
  const { asignatura: slug } = await params;
  const clase = getClase(slug);
  if (!clase) notFound();

  const banco = getBanco(slug);
  const conteo = contarPorTipo(banco);

  return (
    <div className="flex flex-col gap-12">
      <div>
        <p className="s-muted text-sm">
          <Link href="/clases" className="s-link">
            Clases
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{clase.grupo}</span>
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {clase.nombre}
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          {clase.descripcion}
        </p>
      </div>

      {clase.pdf && (
        <section aria-labelledby="titulo-material">
          <h2
            id="titulo-material"
            className="s-muted s-mono text-sm uppercase tracking-wider"
          >
            Material
          </h2>
          <p className="s-muted mt-3 max-w-xl">
            El PDF trae el enunciado y las soluciones. En modo examen no lo
            abras hasta terminar.
          </p>
          <p className="mt-4">
            <a
              href={`/clases/${slug}/${clase.pdf.archivo}`}
              className="s-link text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {clase.pdf.etiqueta}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </p>
        </section>
      )}

      {banco.length > 0 ? (
        <section aria-labelledby="titulo-test">
          <h2
            id="titulo-test"
            className="s-muted s-mono text-sm uppercase tracking-wider"
          >
            Test
          </h2>
          <p className="s-muted mt-3 max-w-xl">
            {conteo.teoria} de teoría y {conteo.practica} de práctica. Respuesta
            múltiple.
          </p>

          <form
            action={`/clases/${slug}/test`}
            method="get"
            className="s-form mt-8 max-w-xl"
          >
            <fieldset>
              <legend>Qué preguntas</legend>
              <label>
                <input type="radio" name="tipo" value="ambas" defaultChecked />
                Teoría y práctica
              </label>
              <label>
                <input type="radio" name="tipo" value="teoria" />
                Solo teoría
              </label>
              <label>
                <input type="radio" name="tipo" value="practica" />
                Solo práctica
              </label>
            </fieldset>

            <fieldset>
              <legend>Modo</legend>
              <label>
                <input type="radio" name="modo" value="ayuda" defaultChecked />
                Ayuda: al contestar dice si está bien o mal y explica
              </label>
              <label>
                <input type="radio" name="modo" value="examen" />
                Examen: sin pistas hasta el final
              </label>
            </fieldset>

            <fieldset>
              <legend>Orden</legend>
              <label>
                <input type="radio" name="orden" value="aleatorio" defaultChecked />
                Desordenar preguntas y respuestas
              </label>
              <label>
                <input type="radio" name="orden" value="fijo" />
                Dejar el orden del banco
              </label>
            </fieldset>

            <fieldset>
              <legend>Cronómetro</legend>
              <label>
                <input type="radio" name="cronometro" value="no" defaultChecked />
                Sin tiempo
              </label>
              <label>
                <input type="radio" name="cronometro" value="si" />
                Contar el tiempo que tardo
              </label>
            </fieldset>

            <button type="submit" className="s-btn">
              Empezar
            </button>
          </form>
        </section>
      ) : (
        <p className="s-muted max-w-xl">
          Esta URL ya está reservada. Todavía no hay preguntas publicadas.
        </p>
      )}
    </div>
  );
}
