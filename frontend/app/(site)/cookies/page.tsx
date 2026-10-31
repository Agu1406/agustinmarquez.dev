import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Uso de cookies y almacenamiento local en ${SITE.domain}.`,
  alternates: { canonical: "/cookies" },
};

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
        Esta web principal no instala cookies propias ni de terceros, ni usa
        herramientas de analítica, publicidad o redes sociales incrustadas. Por
        eso no se muestra un banner de consentimiento: la normativa solo lo
        exige cuando se usan cookies no necesarias.
      </p>
      <p>
        Las tipografías se sirven desde este mismo dominio, sin conexión con
        servidores de terceros durante la visita.
      </p>

      <h2>Demos</h2>
      <p>
        La demo de idiomas guarda en tu navegador, mediante almacenamiento
        local, el idioma elegido y el progreso de los ejercicios. Esos datos
        no salen del dispositivo y no se usan para rastrearte. No hace falta
        un banner: no son cookies de analítica ni de publicidad.
      </p>

      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes bloquear o eliminar cookies y datos de sitios desde los ajustes
        de tu navegador.
      </p>

      <h2>Cambios</h2>
      <p>
        Si en el futuro se añade analítica u otros servicios que usen cookies,
        esta página se actualizará y se solicitará tu consentimiento antes de
        activarlas.
      </p>
    </LegalPage>
  );
}
