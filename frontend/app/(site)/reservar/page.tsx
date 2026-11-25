import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../lib/site";
import {
  getCalcomBookingUrl,
  getCalcomEmbedSrc,
  getWhatsappReservaUrl,
  RESERVAS_AYUDA,
} from "../../lib/reservas";
import CalcomEmbed from "./CalcomEmbed";

export const metadata: Metadata = {
  title: "Reservar clase",
  description:
    "Reserva una clase particular: elige materia, día y hora según disponibilidad.",
  alternates: { canonical: "/reservar" },
};

export default function ReservarPage() {
  const embedSrc = getCalcomEmbedSrc();
  const bookingUrl = getCalcomBookingUrl();
  const whatsappUrl = getWhatsappReservaUrl();

  return (
    <div>
      <p className="s-muted s-mono text-sm">Clases particulares</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        {RESERVAS_AYUDA.titulo}
      </h1>
      <p className="s-muted mt-6 max-w-xl text-lg leading-relaxed">
        {RESERVAS_AYUDA.lead}
      </p>

      <ul className="s-muted mt-6 max-w-xl list-disc space-y-2 pl-5 text-base">
        <li>Materias alineadas con el catálogo de {SITE.domain}/clases.</li>
        <li>Confirmación por correo y evento en calendario.</li>
        <li>
          Zona horaria España (
          <span className="s-mono text-sm">Europe/Madrid</span>).
        </li>
      </ul>

      {embedSrc ? (
        <>
          <CalcomEmbed src={embedSrc} title="Calendario de reserva de clases" />
          <p className="s-muted mt-4 text-sm">
            Si el calendario no carga, puedes{" "}
            {bookingUrl ? (
              <a
                href={bookingUrl}
                className="s-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                abrir la reserva en Cal.com
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            ) : (
              "abrir la reserva en una pestaña nueva desde el enlace que te envíe el profesor"
            )}
            .
          </p>
        </>
      ) : (
        <div className="s-line mt-10 border p-6">
          <p className="s-muted">{RESERVAS_AYUDA.sinConfig}</p>
          <p className="mt-4">
            <a href={`mailto:${SITE.email}`} className="s-link text-lg">
              {SITE.email}
            </a>
          </p>
        </div>
      )}

      {whatsappUrl && (
        <section className="mt-12" aria-labelledby="titulo-whatsapp">
          <h2
            id="titulo-whatsapp"
            className="s-muted s-mono text-sm uppercase tracking-wider"
          >
            WhatsApp
          </h2>
          <p className="s-muted mt-4 max-w-xl">
            Si ya reservaste y quieres avisarme por WhatsApp, o prefieres
            concertar la primera cita por chat:
          </p>
          <p className="mt-4">
            <a
              href={whatsappUrl}
              className="s-link text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </p>
        </section>
      )}

      <p className="mt-12">
        <Link href="/clases" className="s-link">
          Volver al catálogo de materias
        </Link>
      </p>
    </div>
  );
}