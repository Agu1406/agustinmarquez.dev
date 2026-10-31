import type { Metadata } from "next";
import DerechosForm from "../../components/DerechosForm";
import LegalPage from "../../components/LegalPage";
import { RETENTION } from "../../lib/retention";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Tus derechos",
  description: `Cómo pedir acceso o supresión de datos en ${SITE.domain}.`,
  alternates: { canonical: "/derechos" },
};

export default function Derechos() {
  return (
    <LegalPage title="Tus derechos">
      <p>
        Desde aquí puedes pedir acceso, rectificación, supresión, oposición,
        limitación o portabilidad. El formulario abre tu programa de correo,
        dirigido a {SITE.email}. No crea una cuenta ni guarda el mensaje en
        este sitio.
      </p>
      <h2>Qué pasa con una supresión</h2>
      <p>
        El mensaje deja de usarse. Si no hay base legal para conservarlo, se
        suprime o se anonimiza. Si la hay, se conserva solo lo cubierto por
        esa base y, al cumplir el plazo, se suprime o se anonimiza.
      </p>
      <ul>
        <li>
          Correos y contacto: {RETENTION.contact.years} años desde{" "}
          {RETENTION.contact.from} ({RETENTION.contact.basis}).
        </li>
        <li>
          Facturas, si las hubiera: {RETENTION.tax.years} años desde{" "}
          {RETENTION.tax.from} ({RETENTION.tax.basis}). Hoy no hay facturas.
        </li>
        <li>
          Registros del alojamiento: {RETENTION.logs.text} ({RETENTION.logs.basis}).
        </li>
      </ul>
      <h2>Solicitud</h2>
      <DerechosForm />
    </LegalPage>
  );
}
