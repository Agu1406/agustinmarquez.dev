import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { LEGAL, SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Datos del titular y condiciones de uso de ${SITE.domain}.`,
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la
        sociedad de la información y de comercio electrónico (LSSI-CE), se
        informa de los datos del titular de este sitio web:
      </p>
      <ul>
        <li>Titular: {LEGAL.titular}</li>
        <li>NIF: {LEGAL.nif}</li>
        <li>Domicilio: {LEGAL.domicilio}</li>
        <li>Actividad: {LEGAL.actividad}</li>
        <li>
          Correo electrónico:{" "}
          <a href={`mailto:${SITE.email}`} className="s-link">
            {SITE.email}
          </a>
        </li>
        <li>Dominio: {SITE.domain}</li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio web es un portfolio profesional. Muestra proyectos
        realizados, demos de carácter ilustrativo y un medio de contacto. No
        ofrece venta de productos ni servicios de pago a través del propio
        sitio.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web es libre y gratuito. El usuario se
        compromete a hacer un uso adecuado de los contenidos y a no emplearlos
        para actividades ilícitas o contrarias a la buena fe.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        El diseño, el código y los textos de este sitio pertenecen a su
        titular, salvo que se indique lo contrario. Las marcas, logotipos y
        contenidos de los proyectos de terceros mostrados pertenecen a sus
        respectivos propietarios y se citan únicamente para describir el
        trabajo realizado.
      </p>
      <p>
        Tipografías utilizadas: Schibsted Grotesk y JetBrains Mono, ambas
        distribuidas bajo la licencia SIL Open Font License 1.1.
      </p>

      <h2>Demos</h2>
      <p>
        Las demos alojadas en este dominio son prototipos con datos de
        ejemplo. Las menciones a negocios, precios u horarios que aparezcan en
        ellas no constituyen una oferta ni un compromiso comercial.
      </p>

      <h2>Enlaces externos</h2>
      <p>
        Este sitio contiene enlaces a páginas de terceros. El titular no
        controla ni se responsabiliza de sus contenidos ni de sus políticas de
        privacidad.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        El titular procura que la información sea correcta y esté actualizada,
        pero no garantiza la ausencia de errores ni la disponibilidad
        ininterrumpida del sitio.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Este aviso se rige por la legislación española. Para cualquier
        controversia serán competentes los juzgados y tribunales que
        correspondan conforme a la normativa vigente.
      </p>
    </LegalPage>
  );
}
