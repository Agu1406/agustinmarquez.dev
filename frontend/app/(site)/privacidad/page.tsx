import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { LEGAL, SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo se tratan los datos personales en ${SITE.domain}.`,
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  const mail = (
    <a href={`mailto:${SITE.email}`} className="s-link">
      {SITE.email}
    </a>
  );

  return (
    <LegalPage title="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <ul>
        <li>Responsable: {LEGAL.titular}</li>
        <li>NIF: {LEGAL.nif}</li>
        <li>Domicilio: {LEGAL.domicilio}</li>
        <li>Correo electrónico: {mail}</li>
      </ul>

      <h2>Qué datos se tratan</h2>
      <p>
        Este sitio no tiene formularios, cuentas de usuario, comentarios ni
        herramientas de analítica o publicidad. No se recogen datos personales
        de forma automática más allá de los registros técnicos descritos
        abajo.
      </p>
      <ul>
        <li>
          <strong>Correos electrónicos.</strong> Si escribes a {mail}, se
          tratarán tu dirección y el contenido del mensaje para responderte.
        </li>
        <li>
          <strong>Registros técnicos.</strong> El proveedor de alojamiento
          puede registrar datos como la dirección IP, la fecha y el navegador
          para garantizar la seguridad y el funcionamiento del servicio.
        </li>
      </ul>

      <h2>Finalidad y base jurídica</h2>
      <ul>
        <li>
          Responder a tus consultas: consentimiento o medidas
          precontractuales a petición tuya (art. 6.1.a y 6.1.b RGPD).
        </li>
        <li>
          Seguridad del sitio: interés legítimo del responsable (art. 6.1.f
          RGPD).
        </li>
      </ul>

      <h2>Conservación</h2>
      <p>
        Los correos se conservan mientras dure la conversación y, después,
        durante el tiempo necesario para atender posibles responsabilidades
        legales. Los registros técnicos se conservan según la política del
        proveedor de alojamiento.
      </p>

      <h2>Destinatarios</h2>
      <p>
        No se ceden datos a terceros, salvo obligación legal. Los mensajes se
        gestionan a través del servicio de correo del titular y el sitio se
        sirve mediante un proveedor de alojamiento que actúa como encargado del
        tratamiento.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión,
        oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
        {mail}. Indica en el asunto el derecho que quieres ejercer, por
        ejemplo &quot;Solicitud de supresión de datos&quot;. Responderé en un
        plazo máximo de un mes.
      </p>
      <p>
        Si consideras que tus derechos no han sido atendidos, puedes presentar
        una reclamación ante la Agencia Española de Protección de Datos
        (aepd.es).
      </p>

      <h2>Menores</h2>
      <p>
        Este sitio no está dirigido a menores de 14 años y no recoge de forma
        intencionada sus datos.
      </p>

      <h2>Cookies</h2>
      <p>
        Consulta la{" "}
        <Link href="/cookies" className="s-link">
          política de cookies
        </Link>
        .
      </p>
    </LegalPage>
  );
}
