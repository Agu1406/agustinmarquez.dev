import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../../components/JsonLd";
import { ReservaClase } from "../components/ReservaClase";
import { TestForm } from "../components/TestForm";
import { CLASES, getClase, urlReserva } from "../../../lib/clases";
import {
  buildPageMetadata,
  claseJsonLd,
  claseSeoPath,
  claseSeoTitle,
} from "../../../lib/seo";
import { gruposPorUnidad } from "../../../lib/teoria/grupos";
import { getTemario } from "../../../lib/teoria";
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
  return buildPageMetadata({
    title: claseSeoTitle(clase),
    description: clase.descripcion,
    path: claseSeoPath(clase.slug),
  });
}

export default async function ClasePage({ params }: Props) {
  const { asignatura: slug } = await params;
  const clase = getClase(slug);
  if (!clase) notFound();

  const banco = getBanco(slug);
  const conteo = contarPorTipo(banco);
  const temario = getTemario(slug);
  const grupos = temario
    ? gruposPorUnidad([...temario.temas].sort((a, b) => a.orden - b.orden))
    : [];

  return (
    <div className="flex flex-col gap-12">
      <JsonLd data={claseJsonLd(clase)} />
      <div>
        <p className="s-muted text-sm">
          <Link href="/clases" className="s-link">
            Clases
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{clase.grupo}</span>
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Clases de {clase.nombre} online en Madrid
        </h1>
        <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
          {temario ? temario.descripcion : clase.descripcion}
        </p>
        {temario && banco.length > 0 && (
          <p className="mt-6 text-lg">
            <Link href={`/clases/${slug}/test?entrada=ayuda`} className="s-link">
              Test
            </Link>
            <span aria-hidden="true"> · </span>
            <Link href={`/clases/${slug}/test?entrada=examen`} className="s-link">
              Examen
            </Link>
          </p>
        )}
      </div>

      <section aria-labelledby="titulo-reserva">
        <h2
          id="titulo-reserva"
          className="s-muted s-mono text-sm uppercase tracking-wider"
        >
          Reservar clase
        </h2>
        <div className="mt-3">
          <ReservaClase url={urlReserva(clase)} materia={clase.nombre} />
        </div>
      </section>

      {grupos.map((grupo, grupoIndex) => (
        <section key={grupo.titulo} aria-labelledby={`titulo-grupo-${grupoIndex}`}>
          <h2
            id={`titulo-grupo-${grupoIndex}`}
            className="s-muted s-mono text-sm uppercase tracking-wider"
          >
            {grupo.titulo}
          </h2>
          <ol className="s-line mt-6 border-t">
            {grupo.temas.map((tema) => (
              <li key={tema.slug} className="s-line border-b">
                <Link
                  href={`/clases/${slug}/teoria/${tema.slug}`}
                  className="group grid gap-2 py-6 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-6"
                >
                  <span className="s-muted s-mono text-sm">
                    {String(tema.orden).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-2xl font-medium tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                      {tema.titulo}
                    </span>
                    <span className="s-muted mt-1 block">{tema.resumen}</span>
                  </span>
                  <span className="s-muted s-mono text-sm">
                    {tema.nivel} · {tema.lecturaMin} min
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}

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

      {!temario && banco.length > 0 && (
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
          <TestForm slug={slug} modoInicial="ayuda" />
        </section>
      )}

      {!temario && banco.length === 0 && (
        <p className="s-muted max-w-xl">
          Esta URL ya está reservada. Todavía no hay preguntas publicadas.
        </p>
      )}
    </div>
  );
}
