# DESIGN.md

Reglas visuales, de código, legales y de copy para este sitio. Si una decisión choca con este archivo, gana este archivo.

Las reglas de proceso, legal y anti-slop viven también en `IGNORAR.md` y `.cursor/rules/`. **El look (colores, tipografía, movimiento) lo define solo este `DESIGN.md`:** no reutilizar paleta ni fuentes de otro cliente o repo.

La web vive en `frontend/app/(site)/` y usa el tema `.site-theme` (`site.css`). No hay sección de demos. Las webs de clientes publicadas viven en su propio repositorio y aquí solo se enlazan.

## Idea

Papel claro casi blanco, tinta negra y acento rojo. La cabecera es el cartel: barra negra sticky, dominio en blanco y navegación en chips rojos con letra blanca y filete blanco. En la **portada**, franjas a todo el ancho que alternan papel y negro (ritmo claro/oscuro), con paneles de borde duro: texto a un lado e imagen al otro. Contraste alto, tipografía seria y titulares con más peso. Energía tipo cartel (rojo / negro / blanco). Sin amarillo de producto. **No** trama Ben-Day, **no** bocadillos, **no** logos ajenos. Nada que parezca plantilla ni web hecha con un prompt.

## Color (sitio)

Cuerpo solo claro por defecto. No hay modo oscuro automático de página. Bloque negro a propósito: cabecera, hero de portada, franjas pares de proyectos y pie de página. Paleta activa: negro, blanco/papel y rojo.

| Token | Valor | Uso |
|---|---|---|
| `--s-bg` | `#f6f4f1` | Fondo papel (autorizado; no es blanco puro de plantilla) |
| `--s-surface` | `#ffffff` | Superficie, opción marcada |
| `--s-text` | `#0a0a0a` | Texto del cuerpo |
| `--s-muted` | `#5c5754` | Secundario. Contraste AA |
| `--s-muted-on-dark` | `#b8b2ab` | Secundario sobre franja negra. Contraste AA |
| `--s-accent` | `#c8102e` | Chips, botones primarios, enlaces al pasar, foco en cuerpo, acierto |
| `--s-accent-hover` | `#9e0c24` | Hover de chips y botones (texto blanco) |
| `--s-line` | `#d9d4ce` | Filetes del cuerpo |
| `--s-ko` | `#8f2a2a` | Error / fallo en tests |
| `--s-header-bg` | `#0a0a0a` | Fondo de cabecera, hero, bandas oscuras y pie |
| `--s-header-fg` | `#ffffff` | Texto sobre negro |
| `--s-panel-gutter` | `4px` | Filete negro entre franjas de la portada |

Sin degradados. Sin sombras. Sin orbes. Sin amarillo de UI.

## Tipografía

- Sitio: Schibsted Grotesk (variable `--font-schibsted`).
- Código, índices, cronómetro, slugs: JetBrains Mono (`--font-jetbrains`).
- No Inter. No Geist. No Space Grotesk. No Instrument Serif. Sin cursiva de adorno en titulares.

## Composición

- Un `h1` por página. Titular grande y con peso (semibold/bold), párrafo corto, luego contenido.
- Cabecera (`.s-header`): sticky, fondo `--s-header-bg`, dominio blanco. Enlaces de nav: chips `.s-nav-chip` (rojo, letra blanca, filete blanco; hover `--s-accent-hover`).
- Pie (`.s-footer`): fondo `--s-header-bg`, tipografía clara, enlaces blancos con hover rojo; filetes `#262626`.
- **Portada:** franjas full-bleed (`.s-band` / `.s-band-dark`) con gutter `--s-panel-gutter`. Hero oscuro con corte diagonal texto|imagen (`.s-hero-diagonal`). Cada proyecto es un panel texto|imagen que alterna lado y fondo. Contacto en papel, sin foto obligatoria. En el resto del sitio el cuerpo sigue en papel.
- El «panel» es gutter + split de columnas. Prohibido: trama de cómic, bocadillos, logo Marvel u otra marca ajena.
- En superficies de marca (portada), el nombre es señal hero: no lo tape el titular.
- Botón primario (`.s-btn`): fondo `--s-accent`, texto blanco, borde negro (blanco sobre banda oscura). Hover: `--s-accent-hover` (150 ms).
- Radio de borde: 2 px. Objetivos táctiles de 44 px. Foco en cuerpo: acento rojo. Foco en cabecera, pie y bandas oscuras: outline blanco.
- Sin tarjetas con borde de color. Sin tres cajas con icono en fila. Sin bento. Sin badge sobre el titular. Sin franja de color a la izquierda.
- Iconos: solo si hacen falta, trazados en SVG propio. No Lucide. No emojis.
- Espaciado coherente (la escala de Tailwind del layout: `gap-20`, `py-6`, `mt-4`). No animar el hover de los botones más allá del color (150 ms, como `.s-link`).
- `prefers-reduced-motion`: ya anula transiciones en `.site-theme`. No añadir fade-in al scroll, ni haz que sigue al cursor, ni flechas animadas.
- GSAP entra solo en la portada, con una línea de tiempo corta. Sin JavaScript, o con `prefers-reduced-motion`, la portada se queda quieta. No hay Three.js ni Lottie.

## Imágenes de la portada (stock temporal)

Hasta sustituir por capturas reales del cliente, la portada usa fotos de stock libre en `frontend/public/home/`:

| Archivo | Fuente | Uso |
|---|---|---|
| `hero-dev.webp` | Unsplash `photo-1461749280684-dccba630e2f6` ([licencia](https://unsplash.com/license)) | Hero: pantalla con código |
| `proyecto-cerrajeros.webp` | Pexels `279810` ([licencia](https://www.pexels.com/license/)) | Atmósfera cerrajería / cerradura |
| `proyecto-tejado.webp` | Pexels `259588` ([licencia](https://www.pexels.com/license/)) | Atmósfera vivienda / cubierta |
| `proyecto-motorwears.webp` | Unsplash `photo-1558981806-ec527fa84c39` ([licencia](https://unsplash.com/license)) | Atmósfera moto |
| `proyecto-ikaro.webp` | Unsplash `photo-1503951914875-452162b0f3f1` ([licencia](https://unsplash.com/license)) | Atmósfera barbería |

No presentarlas como capturas de los sitios del cliente. Al sustituir, cambiar ruta en `PROJECTS` / constante del hero.

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

Degradados (también en texto), glassmorphism, liquid glass, sombras difusas, emojis, iconos genéricos en cajas, bento, badges sobre el titular, haz de luz que sigue al cursor, orbes, rejillas de puntos, destellos, grano sobre degradado, Inter / Geist / Space Grotesk, shadcn sin tocar, tres tarjetas de features, tres tarifas, viñetas con check, terminal de adorno, blanco puro `#ffffff` como único fondo de página (el papel autorizado es `--s-bg` `#f6f4f1`), morado con negro, neón, pasteles de plantilla, arcoíris, radio blando, testimonios falsos, trama o bocadillos de cómic, logos de terceros. Los paneles de la portada (gutter + split) están autorizados arriba; no copiar estética de otro cliente.

Una web de cliente publicada no se copia aquí: se enlaza.

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

Excepción: las reservas. La ficha `/clases/<slug>` tiene una sección «Reservar clase» (`ReservaClase.tsx`) que incrusta el calendario de Cal.com solo cuando el alumno pulsa el botón. Antes de pulsar no hay ninguna petición a Cal.com. Sin JavaScript el botón es un enlace a Cal.com. Los datos de la reserva viven en Cal.com (encargado del tratamiento); la privacidad y las cookies lo declaran y el plazo está en `RETENTION.bookings`. Si se añade otro tercero, hay que tocar esas dos páginas legales antes de publicar.

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

Cada ficha incluye la reserva de clase con Cal.com. El usuario y el evento general están en `CAL` (`frontend/app/lib/site.ts`); una materia con evento propio lo declara en `evento` dentro de `clases.ts`.

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

GSAP se usa solo en la portada. Three.js y Lottie no entran. Lenis no se usa.
