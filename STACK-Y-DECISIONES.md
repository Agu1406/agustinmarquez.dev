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

*Última actualización: marzo 2026*
