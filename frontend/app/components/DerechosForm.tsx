import Link from "next/link";
import { SITE } from "../lib/site";

const RIGHTS = [
  ["acceso", "Acceso"],
  ["rectificacion", "Rectificación"],
  ["supresion", "Supresión"],
  ["oposicion", "Oposición"],
  ["limitacion", "Limitación"],
  ["portabilidad", "Portabilidad"],
] as const;

export default function DerechosForm() {
  const action = `mailto:${SITE.email}?subject=${encodeURIComponent("Solicitud de derechos")}`;

  return (
    <form className="s-stack mt-8" action={action} method="POST" encType="text/plain">
      <label htmlFor="derecho">
        Derecho
        <select id="derecho" name="derecho" required className="s-field" defaultValue="">
          <option value="" disabled>
            Elige un derecho
          </option>
          {RIGHTS.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="correo">
        Correo
        <input
          id="correo"
          name="correo"
          type="email"
          required
          autoComplete="email"
          className="s-field"
        />
      </label>
      <label htmlFor="mensaje">
        Mensaje
        <textarea id="mensaje" name="mensaje" required rows={5} className="s-field" />
      </label>
      <label htmlFor="privacidad" className="s-check">
        <input id="privacidad" name="privacidad" type="checkbox" required value="leida" />
        <span>He leído la política de privacidad.</span>
      </label>
      <p>
        Está en{" "}
        <Link href="/privacidad" className="s-link">
          esta página
        </Link>
        .
      </p>
      <label htmlFor="edad" className="s-check">
        <input id="edad" name="edad" type="checkbox" required value="si" />
        <span>Confirmo que tengo 14 años o más.</span>
      </label>
      <button type="submit" className="s-btn w-fit">
        Abrir el correo
      </button>
      <p className="s-muted text-sm">
        El asunto es «Solicitud de derechos». El derecho que elijas va en el
        cuerpo. Nada de esto se guarda en el servidor.
      </p>
    </form>
  );
}
