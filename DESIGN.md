# DESIGN.md

Reglas visuales, de código, legales y de copy para este sitio. Si una decisión choca con este archivo, gana este archivo.

La web principal vive en `frontend/app/(site)/` y usa el tema `.site-theme` (`site.css`). Las demos (`/demo/...`) tienen tema propio y no pisan estas reglas.

## Idea

Papel verdoso, tinta casi negra, un solo acento verde fósforo. Tipografía seria, mucho aire, listas numeradas, bordes de 2 px. Nada que parezca plantilla ni web hecha con un prompt.

## Color (sitio)

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--s-bg` | `#eef0ea` | `#0b0f0d` | Fondo |
| `--s-surface` | `#e2e6dd` | `#131a16` | Superficie, opción marcada |
| `--s-text` | `#111612` | `#e8ece6` | Texto |
| `--s-muted` | `#4a524b` | `#98a39b` | Secundario. Contraste AA |
| `--s-accent` | `#0a6e47` | `#6fe3a1` | Enlaces al pasar, foco, acierto |
| `--s-line` | `#c3c9bc` | `#26302a` | Filetes |

Sin degradados. Sin sombras. Sin orbes. El modo oscuro sigue al sistema, no es un dark mode de relleno con poco contraste.

## Tipografía

- Sitio: Schibsted Grotesk (variable `--font-schibsted`).
- Código, índices, cronómetro, slugs: JetBrains Mono (`--font-jetbrains`).
- No Inter. No Geist. No Space Grotesk. No Instrument Serif. Sin cursiva de adorno en titulares.

## Composición

- Un `h1` por página. Titular grande, párrafo corto, luego una lista con filete.
- Radio de borde: 2 px. Objetivos táctiles de 44 px. Foco visible de 2 px en acento.
- Sin tarjetas con borde de color. Sin tres cajas con icono en fila. Sin bento. Sin badge sobre el titular. Sin franja de color a la izquierda.
- Iconos: solo si hacen falta, trazados en SVG propio. No Lucide. No emojis.
- Espaciado coherente (la escala de Tailwind del layout: `gap-20`, `py-6`, `mt-4`). No animar el hover de los botones más allá del color (150 ms, como `.s-link`).
- `prefers-reduced-motion`: ya anula transiciones en `.site-theme`. No añadir fade-in al scroll, ni haz que sigue al cursor, ni flechas animadas.

## Código

Estas reglas valen para frontend, backend y cualquier feature nueva. El aspecto no las anula.

### S.O.L.I.D

Siempre. Cada inicial, en la práctica:

- **S** (responsabilidad única): un módulo hace una cosa. El banco de preguntas no pinta la UI; el reproductor no define la paleta.
- **O** (abierto/cerrado): se extiende sin reescribir lo que ya funciona. Una materia nueva es un slug, una ficha y, si hay test, un banco. No se toca el reproductor.
- **L** (sustitución): si algo cumple un contrato (`Pregunta`, `Clase`, un repositorio), se puede cambiar la implementación sin romper a quien lo usa.
- **I** (segregación de interfaces): no obligues a depender de métodos que no usa. Un listado no necesita `desactivar`.
- **D** (inversión de dependencias): el UI depende de tipos y funciones del dominio (`getClase`, `getBanco`), no al revés.

### C.R.U.D (sin Delete)

Create, Read, Update y **desactivar**. La D no es baja real.

Un registro no se borra: se marca inactivo (`activo: false`, `desactivadoEn`, o el equivalente). Sigue existiendo para historial, auditoria y reactivación. Los listados públicos y operativos filtran los inactivos. No se reutiliza el mismo identificador para un alta nueva.

La excepción es la obligación legal de borrar o anonimizar (punto 20 de Legal). Eso es un procedimiento aparte, no el `DELETE` cotidiano de la app.

### D.R.Y

Don't Repeat Yourself. Una verdad en un solo sitio: catálogo en `clases.ts`, tipos en `tests/types.ts`, tokens en `site.css`, datos de titular en `site.ts`. Si hace falta el mismo comportamiento en dos pantallas, se extrae. Copiar y pegar un componente o una query para «ir rápido» no vale.

### Singleton

Una sola instancia donde la haya de haber una: cliente HTTP, conexión a base de datos, reloj de test, configuración cargada, logger. No un Singleton por costumbre en cada clase. Si el estado es de una pantalla, vive en esa pantalla. Si el recurso es compartido y crear dos haría daño (dos pools, dos cronómetros de la misma sesión), Singleton o el equivalente del lenguaje (`getBanco` sobre un mapa único, un módulo que se importa una vez).

## Prohibido (patrones de web hecha con IA)

Degradados (también en texto), glassmorphism, liquid glass, sombras difusas, emojis, iconos genéricos en cajas, bento, badges sobre el titular, haz de luz que sigue al cursor, orbes, rejillas de puntos, destellos, grano sobre degradado, Inter / Geist / Space Grotesk, shadcn sin tocar, tres tarjetas de features, tres tarifas, viñetas con check, terminal de adorno, fondo blanco puro, morado con negro, neón, pasteles de plantilla, arcoíris, radio blando, testimonios falsos.

Excepción: las demos de clientes pueden tener su propio tema. El sitio y `/clases` no.

## Legal (para no pintar una app que acabe en líos)

En el sitio ya hay aviso legal, privacidad y cookies. Cualquier cosa nueva que recoja datos tiene que pasar por esta lista:

1. Política de privacidad.
2. Términos de uso.
3. Política de reembolso, si hay cobro.
4. Política de cookies.
5. Banner de cookies, si hay cookies no técnicas.
6. Consentimiento en formularios.
7. No recoger datos de más.
8. Auditar SDK de terceros.
9. Quitar dark patterns.
10. Quitar cobros escondidos.
11. Quitar reseñas falsas.
12. Quitar afirmaciones que no se puedan sostener.
13. Todo el texto accesible.
14. Contraste de color.
15. Navegación por teclado.
16. Datos del negocio (titular, NIF, domicilio: ver `LEGAL` en `frontend/app/lib/site.ts`).
17. Consentimiento de edad si hay datos de menores.
18. Enlace de baja en correos.
19. Licencia de fuentes e imágenes.
20. Formulario de acceso y borrado de datos (eso no es el Delete de negocio: ver C.R.U.D).

`/clases` no guarda respuestas, no tiene cuentas y no carga SDK de analítica. Las preguntas van en el cliente. Las páginas de test llevan `noindex`.

## Clases: mapa de URLs

Una URL por lenguaje o materia que se enseña. Hub en `/clases`. Cada ficha en `/clases/<slug>`. Apuntes (temario teórico), si existen, en `/clases/<slug>/teoria` y cada tema en `/clases/<slug>/teoria/<tema>`. El reproductor, si hay banco de preguntas, en `/clases/<slug>/test`.

| Grupo | Materia | URL |
|---|---|---|
| Lenguaje | Java | `/clases/java` |
| Lenguaje | Python | `/clases/python` |
| Lenguaje | C | `/clases/c` |
| Lenguaje | C++ | `/clases/cpp` |
| Lenguaje | C# | `/clases/csharp` |
| Lenguaje | JavaScript | `/clases/javascript` |
| Lenguaje | PHP | `/clases/php` |
| Lenguaje | SQL | `/clases/sql` |
| Lenguaje | Linux | `/clases/linux` |
| Lenguaje | Android | `/clases/android` |
| Lenguaje | Flutter | `/clases/flutter` |
| Lenguaje | JavaFX | `/clases/javafx` |
| Lenguaje | React | `/clases/react` |
| Materia | Inglés | `/clases/ingles` |
| Materia | Álgebra | `/clases/algebra` |
| Materia | Cálculo | `/clases/calculo` |
| Materia | Laboratorio de Informática | `/clases/laboratorio-informatica` |

El catálogo está en `frontend/app/lib/clases.ts`. Los bancos, en `frontend/app/lib/tests/`. Los temarios de apuntes, en `frontend/app/lib/teoria/` (un módulo por slug en `temarios/`).

### Apuntes (teoría)

Misma estética que el sitio (no copiar colores de apuntesdam). Sí copiar la **estructura**: índice numerado de temas, ficha con resumen y tiempo de lectura, navegación anterior/siguiente, bloques de párrafo, listas, código en `<pre class="s-code">` y notas en `<aside class="s-nota">`. Contenido en TypeScript (`TeoriaBloque[]`), no Markdown suelto, para tipado y revisión en PR. Registrar el temario en `lib/teoria/index.ts`. Las instrucciones detalladas para agentes están en `.cursor/rules/clases-contenido.mdc`.

## Tests

En el arranque se elige:

- Tipo: teoría, práctica o ambas.
- Modo: examen (sin acierto ni fallo hasta el final) o ayuda (al contestar dice si está bien o mal y explica).
- Orden: desordenar preguntas y respuestas, o dejarlas fijas.
- Cronómetro: opcional, de cuenta hacia adelante, en mono, sin adorno.

El PDF de un simulacro, si existe, va a `frontend/public/clases/<slug>/`. No es el test: es material de contraste para después.

## Referencias (solo si encajan)

No copiar estética. Si hace falta mirar movimiento o composición, estos sitios son punto de partida, no plantilla:

- [lenis.dev](https://lenis.dev): scroll suave. Aquí no se usa Lenis.
- [basement.studio](https://basement.studio): landing interactiva.
- [shadergradient.co](https://shadergradient.co): fondos 3D.
- [unicorn.studio](https://unicorn.studio): inspiración.

Three.js, GSAP y Lottie no entran en el sitio ni en `/clases` salvo encargo expreso.
