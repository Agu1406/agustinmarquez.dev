import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { RETENTION } from "../../lib/retention";
import { buildPageMetadata } from "../../lib/seo";
import { LEGAL, SITE } from "../../lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de privacidad",
  description: `Cómo se tratan los datos personales en ${SITE.domain}.`,
  path: "/privacidad",
});

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
        No hay cuentas de usuario, comentarios ni herramientas de analítica o
        publicidad. El formulario de derechos solo abre tu programa de correo
        y no envía datos a este servidor. No se recogen datos personales de
        forma automática más allá de los registros técnicos descritos abajo.
        La única excepción es la reserva de clases, que solo se activa si
        pulsas el botón de reservar.
      </p>
      <ul>
        <li>
          <strong>Reservas de clases.</strong> En cada ficha de{" "}
          <Link href="/clases" className="s-link">
            clases
          </Link>{" "}
          puedes reservar con el calendario de Cal.com. Al pulsar «Reservar
          clase» se carga ese calendario, que es un servicio de terceros, y los
          datos que escribes (nombre, correo, materia, notas y la hora elegida)
          se guardan en mi cuenta de Cal.com. Hasta que pulsas, no se
          carga nada de Cal.com.
        </li>
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
          Gestionar tu reserva de clase (confirmarla, recordártela, cambiarla o
          cancelarla): medidas precontractuales y ejecución del servicio que
          solicitas (art. 6.1.b RGPD).
        </li>
        <li>
          Seguridad del sitio: interés legítimo del responsable (art. 6.1.f
          RGPD).
        </li>
      </ul>

      <h2>Conservación</h2>
      <p>
        Los correos se conservan {RETENTION.contact.years} años desde{" "}
        {RETENTION.contact.from} ({RETENTION.contact.basis}). Los datos de las
        reservas se conservan {RETENTION.bookings.years} años desde{" "}
        {RETENTION.bookings.from} ({RETENTION.bookings.basis}). Hoy este sitio
        no emite facturas. Si las hubiera, se conservarían {RETENTION.tax.years}{" "}
        años desde {RETENTION.tax.from} ({RETENTION.tax.basis}).
      </p>
      <p>
        Los registros técnicos se conservan {RETENTION.logs.text} (
        {RETENTION.logs.basis}), según la política del proveedor de
        alojamiento.
      </p>
      <p>
        Si pides la supresión, el mensaje deja de usarse. Si no hay base legal
        para conservarlo, se suprime o se anonimiza. Si la hay (esta política,
        la LSSI-CE o una obligación fiscal), se conserva solo lo cubierto por
        esa base, durante el plazo de arriba, y después se suprime o se
        anonimiza.
      </p>

      <h2>Destinatarios</h2>
      <p>
        No se ceden datos a terceros, salvo obligación legal. Los mensajes se
        gestionan a través del servicio de correo del titular y el sitio se
        sirve mediante un proveedor de alojamiento que actúa como encargado del
        tratamiento.
      </p>
      <p>
        Las reservas se gestionan con Cal.com, Inc. (San Francisco, Estados
        Unidos), que actúa como encargado del tratamiento de los datos de las
        reservas conforme a su{" "}
        <a
          href="https://cal.com/dpa"
          className="s-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          contrato de encargo de tratamiento
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
        . Cal.com trata los datos en Estados Unidos y está adherida al Marco
        de Privacidad de Datos UE-EE. UU.; para lo que ese marco no cubre
        aplica las cláusulas contractuales tipo de la Comisión Europea. Puedes
        consultar su{" "}
        <a
          href="https://cal.com/privacy"
          className="s-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidad
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
        . Cal.com puede usar subencargados para el alojamiento, el correo o el
        vídeo; su lista está en el centro de confianza de Cal.com.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión,
        oposición, limitación del tratamiento y portabilidad desde la página
        de <Link href="/derechos" className="s-link">derechos</Link> o
        escribiendo a {mail}. Responderé en un plazo máximo de un mes.
      </p>
      <p>
        Este sitio no envía correos comerciales ni boletines. No hay una lista
        de la que darse de baja. Si en el futuro hubiera una, cada mensaje
        incluiría un enlace para dejarla.
      </p>
      <p>
        Si consideras que tus derechos no han sido atendidos, puedes presentar
        una reclamación ante la Agencia Española de Protección de Datos
        (aepd.es).
      </p>

      <h2>Menores</h2>
      <p>
        Este sitio no está dirigido a menores de 14 años y no recoge de forma
        intencionada sus datos. Si el alumno es menor de edad, la reserva de
        clases la hace su madre, su padre o su tutor legal, que es quien
        facilita los datos de contacto. Cal.com tampoco admite datos de
        menores de 18 años de forma intencionada.
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
