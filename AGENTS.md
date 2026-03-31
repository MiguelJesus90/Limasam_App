# LIMASAM 2025 — Study App

## Descripción
Aplicación web interactiva de estudio para el "Manual del Operario de Servicio" de LIMASAM 2025. PWA vanilla (HTML/CSS/JS sin frameworks) con sistema de quizzes, progreso persistente y modo oscuro.

## Estructura del Proyecto
```
├── index.html          # SPA con 5 vistas: dashboard, topic, quiz, results, review
├── css/
│   └── styles.css      # ~1260 líneas, diseño responsive, tema claro/oscuro
└── js/
    ├── data.js         # Datos de temas y preguntas (archivo grande, ~2500+ líneas)
    ├── stats.js        # StatsManager — persistencia en localStorage
    ├── quiz.js         # QuizEngine — motor de cuestionarios con timer
    └── app.js          # App class — controlador principal, routing, renderizado
```

## Temas Implementados (11 total)
| # | Tema | Preguntas | Estado |
|---|------|-----------|--------|
| 01 | Barrido Manual Individual | 45 | ✅ |
| 02 | Barrido Manual con Vehículo Auxiliar | 44 | ✅ |
| 03 | Barrido Mediante Brigada | 45 | ✅ |
| 04 | Barrido Mixto | 45 | ✅ |
| 05 | Baldeo Manual con Carrito Porta-manguera | 45 | ✅ |
| 06 | Baldeo Manual con Vehículo Auxiliar | 45 | ✅ |
| 07 | Baldeo Manual Mecanizado Mixto | 45 | ✅ |
| 08-11 | *(pendientes de añadir)* | — | ❌ |

> **Nota:** Los temas 08-11 existen como slots en el sistema pero falta su contenido en `data.js`.

## Arquitectura

### Clases principales
- **`App`** (`app.js`): Controlador SPA. Maneja vistas, navegación, hash routing, sidebar, tema, modales
- **`QuizEngine`** (`quiz.js`): Motor de quizzes. Shuffle, timer, respuestas, resultados (aprobado ≥80%)
- **`StatsManager`** (`stats.js`): Persistencia localStorage. Progreso por tema, errores, stats globales

### Vistas
1. **Dashboard** — Stats globales, grid de temas con progreso, botón reset
2. **Topic** — Contenido de estudio (fases, herramientas, objetivos, tablas)
3. **Quiz** — Preguntas una a una con feedback inmediato y explicación
4. **Results** — Resultado del quiz con desglose de respuestas
5. **Review** — Repaso de preguntas falladas anteriormente

### Features implementadas
- [x] Sistema de navegación por hash (`#dashboard`, `#topic-1`, etc.)
- [x] Sidebar con indicador de temas completados (✓)
- [x] Progreso global en header (barra + contador)
- [x] Examen global de 30 preguntas (bloqueado hasta completar los 11 temas con ≥80%)
- [x] Repaso de errores (preguntas falladas acumuladas)
- [x] Modo oscuro/claro con persistencia
- [x] Timer en examen global (45 min)
- [x] Reset de progreso con confirmación modal
- [x] Responsive (mobile: sidebar colapsable)
- [x] Navegación entre temas (prev/next)

### Datos por tema (estructura en `TOPICS[]`)
```js
{
  id, number, title, description, tools[],
  phases: [{ title, items[] }],
  objectives[],
  questions: [{ question, options[], correct, explanation }],
  // Opcionales: differences[], teamComposition[], roles[]
}
```

## Decisiones de Diseño
- **Sin frameworks**: Vanilla JS para máxima portabilidad (abrir index.html directamente)
- **localStorage** para persistencia (sin backend)
- **SPA con hash routing** para navegación sin recarga
- **CSS Grid + Flexbox** para layout responsive
- **CSS custom properties** para theming claro/oscuro
- **Clases JS** para separación de responsabilidades

## Cómo Ejecutar
Abrir `index.html` directamente en el navegador. No necesita servidor.

## Próximos Pasos / TODO
- [ ] Añadir contenido de temas 08-11 en `data.js`
- [ ] Posible: Service Worker para PWA offline
- [ ] Posible: Exportar/importar progreso
- [ ] Posible: Animaciones de transición entre vistas

## Convenciones
- Español para UI y contenido
- Variables CSS con prefijo `--color-`
- Clases B-ish (no estricto BEM)
- `const` por defecto, arrow functions
- Comentarios de sección en JS con `/* === */`
