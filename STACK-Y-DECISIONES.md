# agustinmarquez.dev — Stack y decisiones

Resumen de qué usaré, qué no, qué haré y qué no.

---

## Stack

| Capa | Usaré | No usaré |
|------|--------|-----------|
| **Frontend** | Next.js, TypeScript, Tailwind | Solo HTML/CSS, otros frameworks |
| **Backend** | FastAPI (Python) | Backend serverless de Vercel como base |
| **Hosting** | Render (Web Service gratis) | Vercel para backend pesado |
| **Dominio** | agustinmarquez.dev (ya comprado) | Subdominio gratis tipo .vercel.app |
| **Repo** | `agustinmarquez.dev` en GitHub | Otro nombre |
| **BD** | PostgreSQL cuando haga falta (o Supabase); al inicio puede no ser obligatorio | PostgreSQL gratis de Render para datos permanentes (expira 90 días) |

---

## Qué haré

- Portfolio como **proyecto técnico**: APIs propias, integración IA/datos, no solo páginas estáticas.
- Enfoque **por fases**: empezar con lo mínimo viable, luego añadir backend (FastAPI) y servicios.
- Posicionamiento **Software Engineer + Data/AI** (React/TS + Python).
- Backend en **Render** (free tier): spin-down aceptable para portfolio.
- Dominio propio en Render (SSL incluido).

---

## Qué no haré

- No depender del backend de Vercel para lógica pesada (límite ~10 s, serverless).
- No montar toda la arquitectura (PostgreSQL, Docker, microservicios) desde el día 1.
- No portfolio estático con solo 3 enlaces a GitHub.
- No usar PostgreSQL gratis de Render para datos que deban persistir años (expira).

---

## Limitaciones que acepto (Render free)

- **Spin-down**: ~15 min sin visitas → la app se duerme; primer visitante puede esperar ~1 min al despertar.
- **Recursos**: 512 MB RAM, 0.1 vCPU.
- **Disco efímero**: lo que se guarde en filesystem se pierde en redeploy/spin-down.

---

## Referencia rápida

- **Mercado objetivo**: web (React/TS) + datos/IA (Python); no solo web.
- **Perfil**: Full-Stack con orientación Data/AI.
- **Fase 1**: Frontend + algo mínimo de backend o API.
- **Fase 2**: FastAPI en Render, APIs útiles (ej. SEO, IA), PostgreSQL/Supabase si hace falta.

## Roadmap por fases (checklist)

### Fase 1 — Landing mínima con Next.js

- [ ] Crear el repositorio `agustinmarquez.dev` en GitHub.
- [ ] Inicializar un proyecto con Next.js + TypeScript + Tailwind en local.
- [ ] Configurar estructura mínima de páginas (landing principal).
- [ ] Crear una landing básica con:
  - [ ] Mi nombre y rol principal.
  - [ ] Una breve descripción de quién soy y qué hago.
  - [ ] Una sección de proyectos (aunque sea en “coming soon”).
  - [ ] Una forma de contacto (email o enlace a redes).
- [ ] Subir el código a GitHub (primer commit serio).
- [ ] Configurar despliegue en Vercel o Render (solo frontend).
- [ ] Apuntar el dominio `agustinmarquez.dev` al despliegue.
- [ ] Verificar que la landing se ve bien en móvil y escritorio.

### Fase 2 — Backend con FastAPI (APIs básicas)

- [ ] Crear un proyecto separado de FastAPI en local.
- [ ] Definir modelos de datos simples (por ejemplo, `Project`, `ContactMessage`).
- [ ] Implementar endpoints básicos:
  - [ ] `GET /status` para ver que el servicio funciona.
  - [ ] `GET /projects` para devolver una lista de proyectos.
  - [ ] `POST /contact` para recibir mensajes de contacto.
- [ ] Añadir validación de datos con Pydantic.
- [ ] Crear un repositorio (o carpeta) para este backend en GitHub.
- [ ] Desplegar FastAPI como Web Service en Render (free tier).
- [ ] Probar los endpoints desplegados desde el navegador o con una herramienta tipo `curl` / Postman.

### Fase 3 — Integración frontend ↔ backend

- [ ] Configurar variables de entorno en el frontend para la URL de la API (FastAPI en Render).
- [ ] Consumir `GET /projects` desde el frontend y mostrar los proyectos en la sección correspondiente.
- [ ] Crear un formulario de contacto en el frontend que use `POST /contact`.
- [ ] Manejar estados de carga y error en el frontend (loading, error, success).
- [ ] Asegurar CORS correcto entre frontend y backend.
- [ ] Añadir algún test manual básico del flujo completo (usuario → frontend → backend → respuesta).

### Fase 4 — Feature de datos / IA

- [ ] Elegir una primera feature de datos/IA (ejemplo: analizador de contenido o auditoría simple de URL).
- [ ] Diseñar el endpoint en FastAPI (entrada, salida, posibles errores).
- [ ] Implementar la lógica en Python (procesamiento de texto/datos, o llamada a API de IA).
- [ ] Crear una vista en el frontend para usar esa feature:
  - [ ] Formulario de entrada de datos (texto o URL).
  - [ ] Llamada al endpoint de FastAPI.
  - [ ] Mostrar resultados de forma clara (resumen, puntuaciones, etc.).
- [ ] Probar todo el flujo de la feature de datos/IA en el entorno desplegado.

### Fase 5 — Pulido, DX y documentación

- [ ] Añadir documentación en el README del repo principal:
  - [ ] Descripción del proyecto y propósito.
  - [ ] Diagrama o explicación breve de la arquitectura (frontend + backend + Render).
  - [ ] Instrucciones para levantar el proyecto en local.
- [ ] Mejorar el diseño visual (Tailwind) para que el sitio se vea profesional.
- [ ] Añadir logs básicos en el backend para depuración.
- [ ] (Opcional) Añadir Docker al backend para mostrar que sé contenedorización.
- [ ] Revisar performance básica y tiempos de carga de la web.
- [ ] Hacer una revisión final del contenido (texto, ortografía, mensajes).

*Última actualización: marzo 2026*
