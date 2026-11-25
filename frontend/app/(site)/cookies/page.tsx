import type { Metadata } from "next";
import Link from "next/link";
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
        Este sitio no instala cookies propias para analítica ni publicidad. Las
        tipografías se sirven desde este mismo dominio.
      </p>
      <p>
        La página de{" "}
        <Link href="/reservar" className="s-link">
          reserva de clases
        </Link>{" "}
        muestra un calendario en un <strong>iframe</strong> servido por{" "}
        <strong>Cal.com</strong>. Al interactuar con ese calendario, Cal.com
        puede usar cookies o almacenamiento local en tu dispositivo según su
        propia política. Esas cookies no las controla el titular de este sitio;
        solo se aplican si usas el widget de reserva.
      </p>
      <p>
        Si en el futuro se añade analítica u otros servicios no estrictamente
        necesarios, esta página se actualizará y se solicitará consentimiento
        cuando corresponda.
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
