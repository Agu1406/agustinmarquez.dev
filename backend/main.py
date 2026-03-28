# Importamos FastAPI con un nombre personalizado similar pero en PascualCase.
from fastapi import FastAPI

# Instanciamos un objeto del tipo FastAPI.
app = FastAPI()

# Ejemplo: La raíz de la API devuelve un JSON con "Hello World".
@app.get("/")
def read_root():
    return {"Hello": "World"}

# Ejemplo de URL que dependiendo de un ID devuelve un item u otro.
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}