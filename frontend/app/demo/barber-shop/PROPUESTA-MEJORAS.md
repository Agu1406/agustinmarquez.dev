# Propuesta de mejoras — Demo Ikaro Men's Barber

**Versión:** 1.0  
**Fecha:** agosto 2026  
**Alcance:** `/demo/barber-shop`  
**Objetivo:** Elevar la demo a estándar de producción accesible (WCAG 2.1 AA) y pulir deuda técnica.

---

## Resumen ejecutivo

La demo actual es una landing premium sólida para portfolio. Esta propuesta añade **accesibilidad para personas con discapacidad visual** (lectores de pantalla, teclado, bajo contraste) y mejoras de mantenibilidad, sin cambiar el diseño ni añadir backend.

| Fase | Enfoque | Estado |
|------|---------|--------|
| **Fase 1** | Accesibilidad esencial (WCAG AA) | ✅ Implementada en esta rama |
| **Fase 2** | Pulido UX y código | ✅ Parcialmente implementada |
| **Fase 3** | Validación y contenido | Pendiente |
| **Fase 4** | Evolución producto (opcional) | Propuesta |

---

## Diagnóstico del estado anterior

### Fortalezas
- Diseño visual coherente y profesional
- `prefers-reduced-motion` en animaciones y scroll reveal
- Metadata SEO y `noindex` correctos para demo
- Datos reales del negocio centralizados en `lib/data.ts`

### Carencias detectadas (accesibilidad)
| Problema | Impacto | WCAG |
|----------|---------|------|
| Sin enlace «Saltar al contenido» | Usuarios de teclado/SR repiten navegación en cada visita | 2.4.1 |
| Sin estilos `:focus-visible` visibles | Navegación por teclado difícil de seguir | 2.4.7 |
| Vídeos con `aria-label` pero decorativos | Ruido innecesario en lectores de pantalla | 1.1.1 |
| Enlaces externos sin aviso de nueva pestaña | Desorientación en SR | 3.2.5 |
| Menú móvil sin trampa de foco ni Escape | Usuarios de teclado quedan atrapados o pierden contexto | 2.1.2 |
| Badge «Abierto/Cerrado» sin `aria-live` | El estado no se anuncia al cargar | 4.1.3 |
| Mapa sin descripción textual alternativa | Usuarios SR no conocen la dirección del iframe | 1.1.1 |
| Contraste `cream-muted` borderline en textos largos | Lectura difícil con baja visión | 1.4.3 |

### Carencias detectadas (código)
- `floating-reserve.tsx` y `cookie-banner.tsx` huérfanos (lógica duplicada en `demo-overlays.tsx`)
- Keys de opiniones frágiles (`text.slice(0, 24)`)
- Navbar no detectaba sección `#inicio` como activa

---

## Fase 1 — Accesibilidad esencial ✅

### 1.1 Navegación por teclado
- **Skip link** «Saltar al contenido principal» → `#contenido-principal`
- **Focus visible** global con anillo brass (`:focus-visible`)
- **Menú móvil:** trampa de foco, cierre con `Escape`, `aria-controls` + `aria-expanded`
- Vídeos fuera del tab order (`tabIndex={-1}`)

### 1.2 Lectores de pantalla
- Landmarks: `<main>`, `<nav aria-label>`, `<address>`, `<footer>` con nav de contacto
- Secciones con `aria-labelledby` enlazadas a sus `<h2>`
- Vídeos decorativos marcados con `aria-hidden`
- Enlaces externos con `aria-label` que incluye «(se abre en nueva pestaña)»
- Badge de horario con `role="status"` + `aria-live="polite"`
- Mapa con `aria-describedby` y texto oculto con dirección completa
- Servicios: etiquetas `sr-only` para «Duración» y «Precio» en móvil

### 1.3 Bajo contraste y movimiento
- `@media (prefers-contrast: more)` — sube contraste de textos secundarios y bordes
- `@media (prefers-reduced-motion: reduce)` — ya existente, se mantiene

### Archivos tocados
```
components/skip-link.tsx          (nuevo)
lib/a11y.ts                       (nuevo)
components/navbar.tsx
components/hero.tsx
components/about.tsx
components/services.tsx
components/contact.tsx
components/reviews.tsx
components/footer.tsx
components/open-badge.tsx
components/demo-overlays.tsx
components/lazy-video.tsx
page.tsx
barber-theme.css
```

---

## Fase 2 — Pulido UX y código ✅ (parcial)

| Mejora | Estado |
|--------|--------|
| Eliminar componentes huérfanos | ✅ |
| Keys estables en opiniones | ✅ |
| `aria-current` en navegación activa | ✅ |
| Observar `#inicio` en scroll spy | ✅ |
| Helper `externalLabel()` centralizado | ✅ |

### Pendiente (Fase 2b)
- Página `/cookies` específica para la demo (ahora apunta al sitio principal)
- Modo alto contraste manual (toggle, no solo `prefers-contrast`)
- Traducción EN para turistas (opcional)

---

## Fase 3 — Validación (recomendada antes de producción)

### Checklist manual
- [ ] Navegar toda la web **solo con teclado** (Tab, Shift+Tab, Enter, Escape)
- [ ] Probar con **VoiceOver** (macOS/iOS) o **NVDA** (Windows)
- [ ] Verificar zoom al **200 %** sin pérdida de contenido
- [ ] Probar en móvil con **TalkBack** (Android)

### Herramientas automáticas
```bash
# Lighthouse (Chrome DevTools → Accessibility)
# axe DevTools (extensión)
# Pa11y (CI)
npx pa11y http://localhost:3000/demo/barber-shop
```

### Objetivo de cumplimiento
- **WCAG 2.1 nivel AA** en criterios aplicables a landing estática
- Puntuación Lighthouse Accessibility ≥ **95**

---

## Fase 4 — Evolución producto (opcional, con presupuesto)

| Mejora | Descripción | Esfuerzo |
|--------|-------------|----------|
| CMS headless | Cliente edita precios/horarios sin código | Medio |
| Panel de reservas propio | Sustituir dependencia de Booksy | Alto |
| PWA + icono instalable | Acceso rápido desde móvil | Bajo |
| Schema.org `LocalBusiness` | Rich snippets en Google | Bajo |
| Informe accesibilidad firmado | Auditoría WCAG con informe PDF | Bajo |

---

## Impacto en presupuesto (referencia Madrid 2026)

Si se vende la web **con accesibilidad AA incluida** desde el inicio:

| Concepto | Sin a11y | Con a11y (esta propuesta) |
|----------|----------|---------------------------|
| Desarrollo inicial | 2.000 – 2.800 € | 2.500 – 3.500 € |
| Mantenimiento/mes | 60 – 80 € | 70 – 90 € |
| Auditoría WCAG puntual | — | 300 – 600 € |

La diferencia (+500 € aprox.) se justifica con: cumplimiento legal (RD 1112/2018 en sector público y grandes empresas), SEO indirecto, y ampliación del público (~15 % población con alguna discapacidad).

---

## Criterios WCAG cubiertos (Fase 1)

| Criterio | Descripción | Cómo |
|----------|-------------|------|
| 1.1.1 | Contenido no textual | Vídeos decorativos ocultos a SR |
| 1.3.1 | Info y relaciones | Landmarks, headings, listas semánticas |
| 1.4.3 | Contraste mínimo | `prefers-contrast: more` |
| 2.1.1 | Teclado | Skip link, foco visible, trampa menú |
| 2.4.1 | Evitar bloques | Skip link |
| 2.4.6 | Encabezados | Jerarquía h1 → h2 → h3 |
| 2.4.7 | Foco visible | `:focus-visible` brass |
| 3.2.5 | Cambio a petición | Enlaces externos anunciados |
| 4.1.2 | Nombre, función, valor | ARIA en menú, badge, regiones |
| 4.1.3 | Mensajes de estado | `aria-live` en horario |

---

## Próximos pasos sugeridos

1. **Revisar** esta rama en navegador y con lector de pantalla
2. **Ejecutar** Lighthouse + axe y corregir avisos restantes
3. **Decidir** si Fase 4 (CMS, Schema.org) entra en el presupuesto del cliente
4. **Presentar** al cliente la demo como «web accesible lista para producción»

---

*Documento generado como parte de la mejora de la demo de portfolio. Para dudas técnicas, ver commits en la rama `cursor/barber-demo-mejoras-a11y-3382`.*
