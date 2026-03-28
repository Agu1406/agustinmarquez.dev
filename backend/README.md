# Backend (FastAPI)

La [**guía oficial de instalación**](https://fastapi.tiangolo.com/#installation) de FastAPI recomienda instalar con `pip install "fastapi[standard]"` dentro de un entorno virtual.

Si no sabes cómo crear uno, puedes seguir [**cómo crear un entorno virtual en un proyecto**](https://fastapi.tiangolo.com/virtual-environments/#create-a-project). Si lo haces bien, tendrás un directorio `.venv` (aquí vive **dentro de `backend/`**, alineado con cómo se despliega este servicio en Render).

Todos los comandos de esta guía asumen que estás en la carpeta **`backend/`**.

---

## Crear el entorno virtual (solo la primera vez)

```powershell
python -m venv .venv
```

---

## OPCIÓN A — Instalación completa (`fastapi[standard]`)

Incluye FastAPI con el extra *standard* (entre otras cosas, **uvicorn** y herramientas adicionales).

```powershell
.\.venv\Scripts\python.exe -m pip install "fastapi[standard]"
```

---

## OPCIÓN B — Instalación mínima (`requirements.txt`)

Solo lo necesario para este backend: **FastAPI** y **uvicorn** con el extra `standard`.

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

---

## Arrancar la API en local

1. Entra en **`backend/`** (si no estás ya ahí).

2. **Activa** el entorno virtual:

   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

   En el prompt debería aparecer **`(.venv)`**.

3. Arranca Uvicorn:

   ```powershell
   python -m uvicorn main:app --reload
   ```

   Deberías ver algo como *Uvicorn running on http://127.0.0.1:8000* y *Application startup complete*.

### Sin activar el venv

Desde **`backend/`**:

```powershell
.\.venv\Scripts\python.exe -m uvicorn main:app --reload
```

Desde la **raíz del monorepo** (sin entrar en `backend/`):

```powershell
.\backend\.venv\Scripts\python.exe -m uvicorn main:app --reload --app-dir backend
```

Documentación interactiva: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
