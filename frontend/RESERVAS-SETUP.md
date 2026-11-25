# Configuración de reservas (Cal.com + Google Calendar)

Pasos fuera del código para activar `/reservar` en producción.

## 1. Cal.com (plan individual gratuito)

1. Crear cuenta en [cal.com](https://cal.com).
2. **Settings → Calendars**: conectar **Google Calendar** y marcar el calendario «Clases particulares» como destino de eventos.
3. **Event types**: crear tipos acordes a tus materias (ej. «Java 60 min», «Python 60 min», «Consulta 30 min»). Copia la URL pública del tipo principal o de tu página de enlace único.
4. En cada tipo, configurar:
   - Disponibilidad (ej. lun–vie 17:00–21:00).
   - Buffer entre reuniones (5–15 min).
   - Anticipación mínima (ej. 24 h).
   - Recordatorio por correo (24 h antes).
   - Zona horaria `Europe/Madrid`.
5. **Embed**: en el evento, copiar la URL de embed o añadir `?embed=true` a la URL pública.

## 2. Variables en Vercel (proyecto frontend)

| Variable | Ejemplo | Obligatoria |
|----------|---------|-------------|
| `NEXT_PUBLIC_CALCOM_EMBED_URL` | `https://cal.com/tu-usuario/clase?embed=true` | Sí, para mostrar el calendario |
| `NEXT_PUBLIC_RESERVAS_WHATSAPP` | `34600111222` (sin `+`) | No; muestra enlace WhatsApp en `/reservar` |

Redeploy tras guardar las variables.

## 3. Google Calendar

1. Crear calendario «Clases particulares».
2. Cualquier evento en ese calendario (o calendarios marcados como «busy» en Cal.com) bloquea huecos.
3. Activar notificaciones del calendario en el móvil.

## 4. Prueba

1. Reserva de prueba desde móvil y escritorio.
2. Comprueba correo de confirmación y evento en Google Calendar.
3. Abre `https://agustinmarquez.dev/reservar` y verifica el iframe.

## 5. Webhook opcional (FastAPI)

En Cal.com → **Settings → Developer → Webhooks**, apunta a:

`https://api.agustinmarquez.dev/webhooks/calcom`

El backend responde `200` y registra el cuerpo en logs (sin persistencia en v1). Configura `CALCOM_WEBHOOK_SECRET` en Render cuando quieras verificar firmas.