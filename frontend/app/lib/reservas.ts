/**
 * Reservas de clases vía Cal.com (embed). La URL del calendario vive en
 * NEXT_PUBLIC_CALCOM_EMBED_URL (Vercel); no incluyas secretos en el repo.
 */

const CALCOM_EMBED_PARAM = "embed=true";

function withEmbedParam(url: string): string {
  try {
    const parsed = new URL(url);
    if (!parsed.searchParams.has("embed")) {
      parsed.searchParams.set("embed", "true");
    }
    return parsed.toString();
  } catch {
    return url.includes("embed=") ? url : `${url}${url.includes("?") ? "&" : "?"}${CALCOM_EMBED_PARAM}`;
  }
}

/** URL del iframe de Cal.com, o undefined si aún no está configurada en Vercel. */
export function getCalcomEmbedSrc(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_CALCOM_EMBED_URL?.trim();
  if (!raw) return undefined;
  return withEmbedParam(raw);
}

/** Enlace público a la página de reserva en Cal.com (sin embed), para abrir en nueva pestaña. */
export function getCalcomBookingUrl(): string | undefined {
  const src = getCalcomEmbedSrc();
  if (!src) return undefined;
  try {
    const parsed = new URL(src);
    parsed.searchParams.delete("embed");
    return parsed.toString();
  } catch {
    return undefined;
  }
}

const WHATSAPP_PREFILL =
  "Hola Agustín, acabo de reservar una clase en la web (o quiero reservar).";

/**
 * Enlace wa.me para confirmar por WhatsApp. Requiere NEXT_PUBLIC_RESERVAS_WHATSAPP
 * en formato internacional sin + (ej. 34600111222).
 */
export function getWhatsappReservaUrl(
  message: string = WHATSAPP_PREFILL,
): string | undefined {
  const raw = process.env.NEXT_PUBLIC_RESERVAS_WHATSAPP?.trim();
  if (!raw) return undefined;
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 9) return undefined;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const RESERVAS_AYUDA = {
  titulo: "Reservar clase",
  lead:
    "Elige materia, día y hora según mi disponibilidad. Recibirás confirmación por correo y la cita quedará en mi calendario.",
  sinConfig:
    "El calendario de reservas se activará en breve. Mientras tanto puedes escribirme por correo.",
} as const;