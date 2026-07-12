# Nexco — Sitio web

Landing page oscura y premium de **Nexco**, implementada a partir del
**Nexco Design System** creado en Claude Design (proyecto `Nexco Design System`).
Motivo de colmena, dorado sobre negro, Poppins + Inter.

> **Conectamos marcas. Transformamos personas.**

## Cómo verlo

- **Rápido:** doble clic en `index.html` (requiere internet para fuentes e iconos).
- **Servidor local** (recomendado): con Node instalado, en esta carpeta:
  ```
  node server.mjs
  ```
  y abre `http://localhost:4321`.

## Estructura

```
nexco/
├─ index.html               # La página (9 secciones), HTML estático
├─ css/
│  ├─ styles.css            # Entrada del sistema de diseño (@imports)
│  ├─ tokens/               # colors · typography · spacing · radius · effects
│  ├─ fonts/fonts.css       # Poppins + Inter (Google Fonts)
│  ├─ base.css              # Defaults del elemento (lienzo oscuro, foco, etc.)
│  ├─ components.css        # Clases nx-* (Button, Card, HexFrame, Honeycomb…)
│  └─ site.css              # Layout del sitio (clases s-*)
├─ js/main.js               # Progreso, nav glass, menú, scroll-reveal, formulario
├─ assets/
│  ├─ logo-nexco.png        # Logo oficial recortado (nav + pie)
│  └─ symbol-nexco.png      # Solo símbolo (favicon)
├─ imagenes/                # Logo original entregado
└─ server.mjs               # Servidor estático local (opcional)
```

## Relación con Claude Design

`css/` replica **1:1** los archivos del proyecto *Nexco Design System* en Claude Design
(mismos tokens y clases `nx-*`). Así puedes seguir editando el sistema allá y volver a
sincronizar. Diferencias de esta implementación frente al kit generado:

- **Producción vanilla** en vez de React+Babel por CDN → más rápido, sin build, SEO-friendly.
- **Logo real** en vez del *wordmark* placeholder (Claude Design no tenía el PNG oficial).
- **Iconos Lucide** por CDN + `lucide.createIcons()`; la colmena va incrustada como SVG estático.

## Sistema de marca (resumen)

| Token | Valor |
|---|---|
| Negro profundo | `#0D0D0D` |
| Blanco humo | `#F2F2F2` |
| Dorado Nexco | `#CB9339` |
| Títulos | Poppins 600 / 700 |
| Cuerpo | Inter 400 / 500 |
| Motivo | Hexágono / colmena |

## Antes de publicar

1. **Correo/dominio del formulario:** hoy es una demo (muestra "¡Gracias!"). Conéctalo a
   tu bandeja real o a un backend en `js/main.js` (dominio pendiente:
   `nexcodigital.com` / `nexcosocial.com`).
2. **Pendientes de marca:** foto de Naty, testimonios/casos de éxito, redes sociales
   ("próximamente" en el pie). Añádelos cuando estén.
3. **Publica** en cualquier hosting estático (Netlify, Vercel, GitHub Pages, Cloudflare
   Pages): sube la carpeta tal cual, sin build.

> Nota de copy: los textos son los de Claude Design (redacción en "tú", derivada del
> manual). Si prefieres el contenido **literal del manual** (p. ej. los 5 puntos exactos
> de mercado objetivo o el detalle "Con Gloomer Group · Marca con Huella"), es un cambio
> rápido.

---
Nexco © 2026 · Nexco Design System v1.0
