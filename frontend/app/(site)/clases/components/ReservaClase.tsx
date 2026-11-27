"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  /** URL de reserva en Cal.com (ver urlReserva en lib/clases.ts). */
  url: string;
  /** Nombre de la materia, para el título accesible del calendario. */
  materia: string;
};

type Estado = "inicial" | "cargando" | "listo" | "error";

/** Si el calendario no responde en este tiempo, se ofrece el enlace directo. */
const ESPERA_MAX_MS = 15000;

/**
 * Calendario de Cal.com bajo demanda. Hasta que el alumno pulsa no se carga
 * nada de terceros. Sin JavaScript el botón es un enlace normal a Cal.com.
 */
export function ReservaClase({ url, materia }: Props) {
  const [estado, setEstado] = useState<Estado>("inicial");
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (estado !== "cargando") return;
    contenedor.current?.focus();
    const temporizador = window.setTimeout(() => setEstado("error"), ESPERA_MAX_MS);
    return () => window.clearTimeout(temporizador);
  }, [estado]);

  const abierto = estado !== "inicial";

  return (
    <div>
      <p className="s-muted max-w-xl">
        Elige día y hora y reserva tu clase de {materia}. Al pulsar se carga el
        calendario de Cal.com, un servicio de terceros que recibe tu nombre,
        tu correo y las notas de la reserva. Consulta la{" "}
        <Link href="/privacidad" className="s-link">
          política de privacidad
        </Link>{" "}
        y la{" "}
        <Link href="/cookies" className="s-link">
          de cookies
        </Link>
        . Si eres menor de edad, la reserva la hace tu madre, tu padre o tu
        tutor.
      </p>

      {!abierto && (
        <p className="mt-6">
          <a
            href={url}
            className="s-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(evento) => {
              evento.preventDefault();
              setEstado("cargando");
            }}
          >
            Reservar clase
            <span className="sr-only"> (si no carga, se abre Cal.com en una pestaña nueva)</span>
          </a>
        </p>
      )}

      {abierto && (
        <div ref={contenedor} tabIndex={-1} className="mt-6 outline-none">
          {estado === "cargando" && (
            <p role="status" className="s-muted s-mono text-sm">
              Cargando el calendario...
            </p>
          )}
          {estado === "error" && (
            <p role="alert" className="s-ko">
              El calendario no responde. Puedes reservar directamente en Cal.com.
            </p>
          )}
          <iframe
            src={url}
            title={`Calendario de reservas de ${materia}`}
            className="s-line mt-4 h-[720px] w-full border"
            onLoad={() => setEstado("listo")}
            onError={() => setEstado("error")}
          />
          <p className="mt-4">
            <a
              href={url}
              className="s-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Cal.com
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
