# Importamos FastAPI con un nombre personalizado similar pero en PascualCase.
from fastapi import FastAPI
# Importamos el middleware necesario para hacer CORS entre frontend y backend.
from fastapi.middleware.cors import CORSMiddleware

origin = [
    https://agustinmarquez.dev
    https://www.agustinmarquez.dev
    http://localhost:3000 # Para desarrollo / pruebas en local.
    # https://api.agustinmarquez.dev (es la de origen, no se pone).
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