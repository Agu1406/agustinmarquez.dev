import logging
import os

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

logger = logging.getLogger(__name__)

origins = [
    "https://agustinmarquez.dev",
    "https://www.agustinmarquez.dev",
    "http://localhost:3000", # Para desarrollo / pruebas en local.
    # "https://api.agustinmarquez.dev" (es la de origen, no se pone).
]

# Instanciamos un objeto del tipo FastAPI.
app = FastAPI()

# Configuración del comportamiento del middleware en nuestra aplicación.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ejemplo: La raíz de la API devuelve un JSON con "Hello World".
@app.get("/")
def read_root():
    return {"Hello": "World"}

# Ejemplo de URL que dependiendo de un ID devuelve un item u otro.
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}


@app.post("/webhooks/calcom")
async def calcom_webhook(request: Request):
    """
    Recibe eventos de Cal.com (BOOKING_CREATED, etc.). v1: acusa recibo y log.
    Configura CALCOM_WEBHOOK_SECRET en Render para verificación futura.
    """
    payload = await request.json()
    trigger = payload.get("triggerEvent", "unknown")
    logger.info("Cal.com webhook: %s", trigger)
    # Verificación de firma: pendiente cuando exista CALCOM_WEBHOOK_SECRET
    _secret = os.environ.get("CALCOM_WEBHOOK_SECRET")
    if _secret:
        pass  # Cal.com documenta cabecera de firma según versión de API
    return {"ok": True, "trigger": trigger}