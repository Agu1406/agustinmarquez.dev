import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { buildPageMetadata } from "../../lib/seo";
import { SITE } from "../../lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de cookies",
  description: `Uso de cookies y almacenamiento local en ${SITE.domain}.`,
  path: "/cookies",
});

export default function Cookies() {
  return (
    <LegalPage title="Política de cookies">
      <h2>Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu
        dispositivo. Sirven, por ejemplo, para recordar preferencias o medir
        el uso del sitio.
      </p>

      <h2>Cookies que usa este sitio</h2>
      <p>
        Este sitio no instala cookies propias, ni usa herramientas de
        analítica, publicidad o redes sociales incrustadas. Por eso no se
        muestra un banner de consentimiento: la normativa solo lo exige cuando
        se usan cookies no necesarias.
      </p>
      <p>
        Las tipografías se sirven desde este mismo dominio, sin conexión con
        servidores de terceros durante la visita.
      </p>

      <h2>Reserva de clases (Cal.com)</h2>
      <p>
        La única excepción es el calendario de reservas. En la ficha de cada
        materia, el botón «Reservar clase» no carga nada de Cal.com hasta que
        lo pulsas. Al pulsarlo se incrusta la página de reservas de Cal.com,
        que es un servicio de terceros. Esa página puede guardar cookies en el
        dominio cal.com; este sitio no escribe ninguna cookie propia al
        incrustarla.
      </p>
      <p>
        En una carga real del calendario, Cloudflare (el CDN de Cal.com)
        escribe la cookie técnica <code>__cf_bm</code> (HttpOnly, Secure,
        SameSite=None, Partitioned, caduca en unos 30 minutos). Sirve para
        detectar tráfico automatizado y proteger el servicio. No es de
        analítica ni de publicidad. Según la política de Cal.com, la parte de
        reservas no usa cookies publicitarias de terceros; las de analítica y
        medición de anuncios solo están en su web de marketing.
      </p>
      <p>
        Si prefieres no cargarlo aquí, la ficha ofrece un enlace para abrir
        Cal.com en una pestaña nueva. Más datos en la{" "}
        <a
          href="https://cal.com/privacy"
          className="s-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidad de Cal.com
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>{" "}
        y en la{" "}
        <Link href="/privacidad" className="s-link">
          política de privacidad
        </Link>{" "}
        de este sitio.
      </p>

      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes bloquear o eliminar cookies y datos de sitios desde los ajustes
        de tu navegador.
      </p>

      <h2>Cambios</h2>
      <p>
        Si en el futuro se añade analítica u otros servicios que usen cookies
        no necesarias, esta página se actualizará y se solicitará tu
        consentimiento antes de activarlas.
      </p>
    </LegalPage>
  );
}
