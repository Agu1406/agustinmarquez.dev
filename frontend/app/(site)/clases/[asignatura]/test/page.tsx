import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TestForm } from "../../components/TestForm";
import { CLASES, getClase } from "../../../../lib/clases";
import { contarPorTipo, filtrarBanco, getBanco } from "../../../../lib/tests/bancos";
import { parseConfig } from "../../../../lib/tests/config";
import TestPlayer from "./TestPlayer";

type Props = {
  params: Promise<{ asignatura: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return CLASES.map((clase) => ({ asignatura: clase.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { asignatura } = await params;
  const clase = getClase(asignatura);
  if (!clase) return {};
  return {
    title: `Test · ${clase.nombre}`,
    description: `Test de ${clase.nombre}.`,
    robots: { index: false, follow: false },
  };
}

function uno(valor: string | string[] | undefined): string | undefined {
  if (Array.isArray(valor)) return valor[0];
  return valor;
}

export default async function TestPage({ params, searchParams }: Props) {
  const { asignatura: slug } = await params;
  const clase = getClase(slug);
  if (!clase) notFound();

  const consulta = await searchParams;
  const banco = getBanco(slug);
  const conteo = contarPorTipo(banco);

  if (!uno(consulta.modo)) {
    return (
      <div>
        <p className="s-muted text-sm">
          <Link href="/clases" className="s-link">
            Clases
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/clases/${slug}`} className="s-link">
            {clase.nombre}
          </Link>
        </p>
        {banco.length === 0 ? (
          <>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              No hay preguntas publicadas
            </h1>
            <p className="s-muted mt-6 max-w-xl text-lg">
              Esta materia todavía no tiene banco. Vuelve a la ficha.
            </p>
            <p className="mt-6">
              <Link href={`/clases/${slug}`} className="s-link">
                Volver a {clase.nombre}
              </Link>
            </p>
          </>
        ) : (
          <>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {uno(consulta.entrada) === "examen" ? "Examen" : "Test"}
            </h1>
            <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
              {conteo.teoria} de teoría y {conteo.practica} de práctica. Respuesta
              múltiple.
            </p>
            <TestForm
              slug={slug}
              modoInicial={uno(consulta.entrada) === "examen" ? "examen" : "ayuda"}
            />
          </>
        )}
      </div>
    );
  }

  const config = parseConfig(consulta);
  const preguntas = filtrarBanco(banco, config.alcance);

  if (preguntas.length === 0) {
    return (
      <div>
        <p className="s-muted text-sm">
          <Link href="/clases" className="s-link">
            Clases
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/clases/${slug}`} className="s-link">
            {clase.nombre}
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          No hay preguntas con ese filtro
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg">
          Vuelve al formulario y elige otro tipo, o espera a que haya banco para
          esta materia.
        </p>
        <p className="mt-6">
          <Link href={`/clases/${slug}/test`} className="s-link">
            Volver al formulario
          </Link>
        </p>
      </div>
    );
  }

  return (
    <TestPlayer
      slug={slug}
      nombre={clase.nombre}
      config={config}
      preguntas={preguntas}
    />
  );
}
