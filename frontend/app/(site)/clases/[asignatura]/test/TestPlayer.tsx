"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { etiquetaAlcance, etiquetaModo } from "../../../../lib/tests/config";
import { barajar } from "../../../../lib/tests/shuffle";
import type {
  Pregunta,
  PreguntaBarajada,
  TestConfig,
} from "../../../../lib/tests/types";

type Sesion = {
  preguntas: PreguntaBarajada[];
  respuestas: Record<string, string>;
  comprobadas: string[];
  t0: number;
};

type Props = {
  slug: string;
  nombre: string;
  config: TestConfig;
  preguntas: Pregunta[];
};

function claveSesion(slug: string, config: TestConfig): string {
  return `clases:${slug}:${config.alcance}:${config.modo}:${config.aleatorio ? "aleatorio" : "fijo"}:${config.cronometro ? "crono" : "no"}`;
}

function montarSesion(preguntas: Pregunta[], config: TestConfig): Sesion {
  const orden = config.aleatorio ? barajar(preguntas) : [...preguntas];
  return {
    preguntas: orden.map((pregunta) => ({
      ...pregunta,
      opciones: config.aleatorio ? barajar(pregunta.opciones) : [...pregunta.opciones],
    })),
    respuestas: {},
    comprobadas: [],
    t0: Date.now(),
  };
}

function leerSesion(clave: string): Sesion | null {
  try {
    const crudo = sessionStorage.getItem(clave);
    if (!crudo) return null;
    const data = JSON.parse(crudo) as Sesion;
    if (!Array.isArray(data.preguntas) || data.preguntas.length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

function formatoTiempo(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function TestPlayer({ slug, nombre, config, preguntas }: Props) {
  const clave = useMemo(() => claveSesion(slug, config), [slug, config]);
  const [sesion, setSesion] = useState<Sesion | null>(null);
  const [indice, setIndice] = useState(0);
  const [ahora, setAhora] = useState(0);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    const guardada = leerSesion(clave);
    const siguiente = guardada ?? montarSesion(preguntas, config);
    /* El orden aleatorio y sessionStorage solo existen en el cliente. */
    /* eslint-disable-next-line react-hooks/set-state-in-effect -- hidratar sesión local */
    setSesion(siguiente);
    setAhora(Date.now());
    sessionStorage.setItem(clave, JSON.stringify(siguiente));
  }, [clave, config, preguntas]);

  useEffect(() => {
    if (!config.cronometro || terminado || !sesion) return;
    const id = window.setInterval(() => setAhora(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [config.cronometro, terminado, sesion]);

  function guardar(siguiente: Sesion) {
    setSesion(siguiente);
    sessionStorage.setItem(clave, JSON.stringify(siguiente));
  }

  function reiniciar() {
    sessionStorage.removeItem(clave);
    const nueva = montarSesion(preguntas, config);
    setIndice(0);
    setTerminado(false);
    setAhora(Date.now());
    guardar(nueva);
  }

  if (!sesion) {
    return <p className="s-muted">Preparando el test.</p>;
  }

  const total = sesion.preguntas.length;
  const transcurrido = Math.max(0, ahora - sesion.t0);
  const aciertos = sesion.preguntas.filter(
    (pregunta) => sesion.respuestas[pregunta.id] === pregunta.correcta,
  ).length;

  if (terminado) {
    return (
      <div className="flex flex-col gap-12">
        <div>
          <p className="s-muted text-sm">
            <Link href="/clases" className="s-link">
              Clases
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href={`/clases/${slug}`} className="s-link">
              {nombre}
            </Link>
            <span aria-hidden="true"> / </span>
            <span>Resultado</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {aciertos} de {total}
          </h1>
          <p className="s-muted mt-4 text-lg">
            {etiquetaAlcance(config.alcance)}. {etiquetaModo(config.modo)}.
            {config.cronometro ? ` Tiempo ${formatoTiempo(transcurrido)}.` : ""}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button type="button" className="s-btn" onClick={reiniciar}>
              Repetir
            </button>
            <Link href={`/clases/${slug}`} className="s-link">
              Cambiar opciones
            </Link>
          </div>
        </div>

        <ol className="s-line border-t">
          {sesion.preguntas.map((pregunta, i) => {
            const marcada = sesion.respuestas[pregunta.id];
            const bien = marcada === pregunta.correcta;
            const correcta = pregunta.opciones.find((opcion) => opcion.id === pregunta.correcta);
            const elegida = pregunta.opciones.find((opcion) => opcion.id === marcada);
            return (
              <li key={pregunta.id} className="s-line border-b py-8">
                <p className="s-muted s-mono text-sm">
                  {String(i + 1).padStart(2, "0")} · {pregunta.tema} ·{" "}
                  {pregunta.tipo === "teoria" ? "Teoría" : "Práctica"} ·{" "}
                  {bien ? "Acierto" : "Fallo"}
                </p>
                <p className="mt-3 text-lg leading-relaxed">{pregunta.enunciado}</p>
                <p className="mt-4">
                  Tu respuesta: {elegida?.texto ?? "Sin contestar"}
                </p>
                {!bien && (
                  <p className="mt-2">
                    Correcta: {correcta?.texto}
                  </p>
                )}
                <p className="s-muted mt-4 leading-relaxed">{pregunta.explicacion}</p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  const pregunta = sesion.preguntas[indice];
  if (!pregunta) {
    return <p className="s-muted">No hay preguntas con este filtro.</p>;
  }

  const marcada = sesion.respuestas[pregunta.id];
  const comprobada = sesion.comprobadas.includes(pregunta.id);
  const esAyuda = config.modo === "ayuda";
  const bloqueada = esAyuda && comprobada;
  const acerto = marcada === pregunta.correcta;

  function marcar(opcionId: string) {
    if (bloqueada || !sesion || !pregunta) return;
    const siguiente: Sesion = {
      ...sesion,
      respuestas: { ...sesion.respuestas, [pregunta.id]: opcionId },
    };
    if (esAyuda) {
      siguiente.comprobadas = sesion.comprobadas.includes(pregunta.id)
        ? sesion.comprobadas
        : [...sesion.comprobadas, pregunta.id];
    }
    guardar(siguiente);
  }

  function continuar() {
    if (!sesion || !pregunta) return;
    if (indice + 1 >= total) {
      setAhora(Date.now());
      setTerminado(true);
      return;
    }
    setIndice((valor) => valor + 1);
  }

  const puedeSeguir = esAyuda ? comprobada : Boolean(marcada);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="s-muted text-sm">
            <Link href={`/clases/${slug}`} className="s-link">
              {nombre}
            </Link>
            <span aria-hidden="true"> · </span>
            <span>
              {etiquetaAlcance(config.alcance)}, {etiquetaModo(config.modo)}
            </span>
          </p>
          <p className="s-mono mt-3 text-sm">
            {String(indice + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            <span className="s-muted"> · {pregunta.tema}</span>
          </p>
        </div>
        {config.cronometro && (
          <p className="s-mono text-lg" aria-live="off">
            <span className="sr-only">Tiempo transcurrido: </span>
            {formatoTiempo(transcurrido)}
          </p>
        )}
      </div>

      <div
        className="s-progress"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={indice + 1}
        aria-label={`Pregunta ${indice + 1} de ${total}`}
      >
        <span style={{ width: `${((indice + 1) / total) * 100}%` }} />
      </div>

      <div>
        <h1 className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          {pregunta.enunciado}
        </h1>
        <p className="s-muted s-mono mt-3 text-sm">
          {pregunta.tipo === "teoria" ? "Teoría" : "Práctica"}
        </p>
      </div>

      <div role="radiogroup" aria-label="Respuestas" className="flex flex-col">
        {pregunta.opciones.map((opcion) => {
          const seleccionada = marcada === opcion.id;
          let estado: "idle" | "correcta" | "incorrecta" | "solucion" = "idle";
          if (bloqueada) {
            if (opcion.id === pregunta.correcta) estado = "correcta";
            else if (seleccionada) estado = "incorrecta";
          } else if (seleccionada) {
            estado = "solucion";
          }
          return (
            <button
              key={opcion.id}
              type="button"
              role="radio"
              aria-checked={seleccionada}
              data-estado={estado}
              className="s-choice"
              disabled={bloqueada}
              onClick={() => marcar(opcion.id)}
            >
              {opcion.texto}
            </button>
          );
        })}
      </div>

      {bloqueada && (
        <p role="status" className={acerto ? "s-ok" : "s-ko"}>
          {acerto ? "Correcta. " : "Incorrecta. "}
          {pregunta.explicacion}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          className="s-btn"
          disabled={!puedeSeguir}
          onClick={continuar}
        >
          {indice + 1 >= total ? "Ver resultado" : "Siguiente"}
        </button>
        <button type="button" className="s-link" onClick={reiniciar}>
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
}
