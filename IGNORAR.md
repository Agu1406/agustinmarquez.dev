# Instrucciones para la IA

Por favor, lee este archivo **entero** antes de diseñar, programar o cambiar la app.

No es un blog ni una lista de ideas sueltas. Es un encargo: **usa todo su contenido, dentro de lo posible**, en el diseño, el código, el copy y lo legal. Si un punto no aplica a este proyecto, dilo y no lo fuerces. Si un punto choca con la ley española o europea (RGPD, LOPDGDD, LSSI-CE), gana la ley.

Si el proyecto tiene `CONTEXT.md`, `DESIGN.md`, `DOC.md` u otras notas del negocio, léelas también y no inventes datos, reseñas, precios ni afirmaciones.

**Look de este repo:** colores, tipografía, radio, movimiento y composición permitidos viven solo en `DESIGN.md` de **este** proyecto. No reutilices la paleta ni las fuentes de otro cliente o repo.

---

## 20 cosas que te pido que hagas para que la app no nos lleve a un juicio

Por favor, comprueba y aplica cada punto. Si falta, impléméntalo o deja claro qué dato humano hace falta.

1. Política de privacidad.
2. Términos de servicio.
3. Política de reembolsos (solo si hay cobros; si no, no inventar una).
4. Política de cookies.
5. Banner de consentimiento de cookies (solo si hay cookies no esenciales).
6. Revisar los consentimientos de los formularios.
7. No recoger datos innecesarios.
8. Auditar los SDK de terceros.
9. Quitar patrones oscuros.
10. Quitar tarifas ocultas.
11. Quitar reseñas falsas.
12. Quitar afirmaciones sin respaldo.
13. Accesibilidad: todo el texto.
14. Corregir el contraste de color.
15. Navegación por teclado.
16. Añadir los datos de la empresa (titular, NIF, email: la fuente que use este repo).
17. Consentimiento de edad para datos de menores.
18. Enlace para darse de baja en los correos.
19. Licenciar las fuentes e imágenes que se usen.
20. Formulario de solicitud y de borrado de datos.

---

## Arquitectura y datos: te pido SOLID, DRY, Singleton y CRUD

Por favor, aplícalos siempre: SOLID, DRY, Singleton (solo donde haga falta una instancia compartida) y CRUD.

### SOLID

- S: una responsabilidad por módulo, componente o función.
- O: ampliar con código nuevo, no reescribiendo lo que ya cumple.
- L: una implementación sustituye a su contrato sin romper a quien la usa.
- I: interfaces o tipos estrechos; no mezclar reservas, legal y analítica en el mismo contrato.
- D: depender de datos y contratos (la fuente de verdad del negocio y las APIs), no de detalles internos.

### DRY

Por favor, no dupliques precios, horarios, contacto, copy legal ni lógica de negocio. Una sola fuente de verdad. Extrae solo cuando haya repetición real.

### Singleton

Usa una sola instancia compartida para clientes, configuración o estado global. No conviertas un Singleton en un almacén de todo el programa.

### CRUD y la D

- C / R / U: crear, leer y actualizar con normalidad.
- D (Delete): inactivar. No borres a ciegas. No contradigas lo legal ya fijado en este archivo ni el derecho español o europeo.

Flujo que te pido ante una baja o una petición de supresión:

1. Inactivar siempre. La cuenta o el dato deja de usarse. El histórico se conserva.
2. ¿Hay base legal para conservar? (privacidad, RGPD / LOPDGDD, LSSI-CE, fiscal o mercantil).
   - No: suprimir o anonimizar de forma irreversible.
   - Sí: conservar solo lo cubierto por esa base y avisar qué se guarda, por qué y hasta cuándo.
3. Al cumplir el plazo: suprimir o anonimizar.

Plazos (si el proyecto tiene `RETENTION` o una política de privacidad, úsalos ahí y no los dupliques a mano):

- Consultas y datos de contacto: 5 años desde el fin de la relación o de la última comunicación (artículo 1964 del Código Civil).
- Facturas y obligaciones tributarias: 4 años desde el fin del plazo de presentación del impuesto (artículo 66 de la Ley General Tributaria).
- Documentación mercantil: 6 años desde el último asiento (artículo 30 del Código de Comercio).
- Registros técnicos del servidor: el tiempo estrictamente necesario para la seguridad del servicio (artículo 6.1.f del RGPD).

En duda: no borres; inactiva y señala el choque.

---

## Principios que te pido en casi cualquier proyecto

### Código

- **KISS.** La solución más simple que cumple. Si un Singleton o una abstracción no ahorra trabajo, no está.
- **YAGNI.** No construyas cuentas, pagos, 3D o analítica «por si acaso». Se añade cuando hace falta, con la legalidad delante.
- **Separación de datos y presentación.** Una fuente de verdad (`data.ts`, un CMS, una API) y pantallas que solo leen. Es DRY aplicado al negocio.
- **Fallar en voz alta.** Un dato legal vacío, un precio mal puesto o un secreto en el repo deben romper el build o el test, no publicarse en silencio.
- **Composición antes que herencia.** Piezas pequeñas que se combinan mejor que una clase base gigante.
- **Idempotencia.** Un mismo clic, webhook o reintento no crea dos altas, dos cobros ni dos bajas.

### Datos, cuentas y ley

- **Minimización.** Recoge solo lo necesario (artículo 5 del RGPD). Encaja con el punto 7 de la lista legal.
- **Privilegio mínimo.** Cada pieza ve solo lo suyo: la web pública no ve facturas; el panel no ve contraseñas en claro.
- **Registro de auditoría, no de chismorreo.** Quién dio de baja, cuándo y por qué. Eso sostiene el CRUD: la D inactiva; la supresión de verdad queda por escrito.
- **Secretos fuera del repo.** `.env` local, variables en el alojamiento, nunca tokens en git.
- **Copias y restauración.** Un backup no sirve si no se ha restaurado nunca.

### Producto e interfaz

- **Mejora progresiva.** Sin JavaScript se lee, se usa lo esencial y se ve el aviso legal. El movimiento es extra.
- **Accesibilidad de base.** Contraste, teclado, un `h1`, textos de enlace claros. Encaja con los puntos 13 a 15 de la lista legal.
- **Estados reales.** Vacío, error, carga y «aún no hay contenido» se diseñan; no se deja un hueco blanco.
- **URLs estables.** Rutas como `/privacidad` y `/aviso-legal` no se cambian a la ligera; si se mueven, redirección.

### Qué te pido que no metas por defecto

- CQRS, microservicios, event sourcing o DDD completo: sirven en sistemas grandes; en el resto hinchan el código.
- Singleton no es universal: solo donde hace falta **una** instancia. Usarlo para todo contradice SOLID.

---

## 50 cosas que te pido que no uses: la app no debe parecer hecha con IA / «vibecoded»

Por favor, evita todos estos patrones. Si ya están, quítalos. **Colores, tipografía, radio, espaciado y movimiento permitidos: solo los de `DESIGN.md` de este repo.** No copies el look de otro proyecto.

1. Degradado de morado a azul.
2. Texto del hero con degradado.
3. Emojis en los titulares.
4. La fuente Inter en todas partes.
5. Tarjetas con borde de color.
6. Tarjetas con glassmorphism.
7. Modo oscuro de bajo contraste.
8. Tres cajas con icono en fila.
9. Badge encima del titular.
10. Iconos Lucide en todas partes.
11. shadcn/UI sin tocar.
12. Fade-in al hacer scroll (salvo el movimiento ya definido en este `DESIGN.md`, con reduced-motion).
13. Botones que se desvanecen al pasar el cursor.
14. Espaciado inconsistente (usa la escala de este `DESIGN.md`).
15. Guiones largos (em dash) en todas partes.
16. Copy genérico de palabras de moda.
17. Acentos en serif cursiva.
18. Haz de luz que sigue al cursor.
19. Space Grotesk + Instrument Serif.
20. Grano sobre un degradado.
21. Degradados duros (salvo excepción explícita en este `DESIGN.md`).
22. Iconos Lucide.
23. Fondo blanco puro (salvo que este `DESIGN.md` lo pida).
24. Coloreado arcoíris.
25. Sombras proyectadas (salvo que este `DESIGN.md` las permita).
26. Tres tarjetas de características en fila.
27. Emojis.
28. Liquid glass.
29. Guiones largos (em dash).
30. Inter / Geist / Space Grotesk.
31. Franja de color a la izquierda.
32. Testimonios falsos.
33. Rejillas bento.
34. Ventana de terminal decorativa.
35. «No es X, es Y».
36. Viñetas con check.
37. Tres tarifas inventadas.
38. Sin demos reales del producto (si el producto es demostrable).
39. Esquinas blandas genéricas (usa el radio de este `DESIGN.md`).
40. Morado y negro de plantilla.
41. Sin skeleton loaders (si hay carga asíncrona, estado de carga real).
42. Orbes radiales.
43. Rejillas de puntos.
44. Iconos de destello.
45. Flechas animadas decorativas.
46. Sin términos de servicio (si aplica).
47. Sin política de privacidad.
48. Animaciones al pasar el cursor fuera de las ya definidas en este `DESIGN.md`.
49. Colores neón de plantilla.
50. Colores pastel básicos de plantilla.

---

## Marca y favicon (proceso común, estilo por web)

El detalle vive en `DESIGN.md`. Mismo **proceso** entre webs (SVG → favicon → layout + cabecera). Cada web usa **su** paleta y monograma desde **su** `DESIGN.md`; no reutilizar colores ni letras de otro proyecto. Sin icono genérico de framework, sin Lucide/emoji como logo, sin raster genérico salvo marca oficial del cliente.

---

## Webs de las que te pido que te inspires

Toma inspiración de estructura, ritmo y movimiento, sin copiar código, fotos ni marca, y **sin adoptar su paleta** (Design DNA: estructura sí, colores y efectos no, salvo que este `DESIGN.md` diga otra cosa):

- [lenis.dev](https://lenis.dev) — scroll suave.
- [basement.studio](https://basement.studio) — landing interactiva.
- [shadergradient.co](https://shadergradient.co) — fondos 3D animados.
- [unicorn.studio](https://unicorn.studio) — sitios de inspiración.

Lenis, GSAP, Three.js o Lottie **no** se añaden salvo que se pida o que este `DESIGN.md` lo autorice.

---

## Skills: te pido que las uses cuando la app se mueva

Actívalas si el trabajo lo pide. Empieza por Design DNA cuando haga falta dirección visual **sin** clonar la paleta de la referencia.

1. Three.js (`CloudAl-X/threejs-skills`) — solo si el proyecto lo pide.
2. GSAP (`greensock/gsap-skills` / `GreenSock/gsap-skills`) — solo dentro de lo que permita este `DESIGN.md`.
3. Design DNA (`zanwei/design-dna`) — extraer; **descartar colores y efectos** salvo acuerdo; aplicar el resto bajo este `DESIGN.md`.
4. Motion Design (`lottiefiles/motion-design-skill` / `LottieFiles/motion-design-skill`).
5. Genjutsu (`AThevon/genjutsu` / `Athevon/genjutsu`).

Se apilan: Design DNA → GSAP/Motion → Three.js → Genjutsu. Repos públicos, sin pago.

---

## Cinco herramientas que te pido para que la web parezca de 10.000 €

Úsalas cuando ayuden, sin inflar el proyecto:

- Taste Skill.
- web-design-guidelines.
- awasome-design-md
- Image to code (¿GitHub?)
- Playwright (Microsoft): E2E, axe y capturas.

---

## Contexto

Lee el contexto del negocio **antes** de diseñar. Si hay `CONTEXT.md` o `DOC.md`, úsalo como fuente de verdad. No inventes lo que no esté ahí. Para un proyecto nuevo, rellena `CONTEXT.plantilla.md` con el cliente; no copies datos de otro repo.
