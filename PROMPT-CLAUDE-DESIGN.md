# Prompt para Claude Design — Sitio web de Nexco

Copia y pega el bloque de abajo en Claude (Artifacts / Design) para generar diseños
on-brand. Está construido a partir del **Manual de Marca Nexco v1.0**. Debajo del
prompt encontrarás la lista de lo que ya dejé terminado por código (las partes que una
generación de diseño no suele resolver sola).

---

## ▶ PROMPT (cópialo tal cual)

> Actúa como director de arte y desarrollador front-end senior. Diseña y construye una
> **landing page de una sola página, oscura y de lujo**, para **Nexco**, una agencia de
> marketing digital especializada en redes sociales, gestión de comunidades y
> transformación de marca para **emprendedores y empresas latinas en Estados Unidos**.
>
> **Concepto central:** la **colmena** — comunidad, conexión y propósito. Usa el
> **hexágono como motivo estructural recurrente** (no como adorno): tarjetas hexagonales,
> marcos de íconos en hexágono, viñetas hexagonales y un clúster de panal animado en el
> hero donde algunas celdas se encienden en dorado, como una colmena viva.
>
> **Paleta (úsala exactamente):**
> - Negro profundo `#0D0D0D` — fondo principal (dominante 70%)
> - Blanco humo `#F2F2F2` — texto principal
> - Dorado Nexco `#CB9339` — acento y detalles (úsalo con precisión, no lo satures)
> - Apoyos: dorado claro `#E6B85C` para gradientes, negros por capas `#111`, `#161616`.
>
> **Tipografía:** títulos en **Poppins** (600/700), cuerpo en **Inter** (400/500).
> Titulares grandes, `letter-spacing` negativo, jerarquía marcada.
>
> **Tono visual:** premium, editorial, con mucho aire negro, acentos dorados,
> micro-interacciones sutiles (revelado al hacer scroll, glow dorado en hover, gradientes
> radiales suaves), textura de grano fina. Nada de morados, degradados genéricos ni
> estética "plantilla de IA".
>
> **Voz de los textos:** cercana (de tú a tú), profesional sin tecnicismos, motivadora y
> auténtica. Habla al emprendedor latino con calidez y claridad.
>
> **Secciones (en este orden):**
> 1. **Nav** fijo con logo (hexágono + "NEXCO") y CTA "Empecemos".
> 2. **Hero** — titular "Conectamos marcas. Transformamos personas.", subtítulo, dos
>    CTAs y una fila con Base: Colombia · Mercado: Latinos en USA · Idioma: Español ·
>    Alcance: Internacional. A la derecha, el panal animado.
> 3. **Sobre Nexco** — qué es la marca + la metáfora de la colmena.
> 4. **Identidad** — tarjetas de Misión y Visión + valores (Conexión, Transformación,
>    Autenticidad, Compromiso, Innovación) como chips.
> 5. **Mercado objetivo** — "¿A quién le habla Nexco?" con 5 puntos en lista hexagonal.
> 6. **Servicios** — 5 tarjetas con precio: Construcción de marca (Cotización),
>    Community Manager ($600/mes, destacada), Campañas ($300 + pauta), Digitalización
>    (Cotización), Fotografía (Cotización). Banner del lead magnet gratuito
>    "Manual para vencer el miedo".
> 7. **Voz y Tono** — declaración + 4 tarjetas (Cercana, Profesional, Motivadora, Auténtica).
> 8. **Contacto** — CTA final "¿List@ para construir tu comunidad?" con formulario.
> 9. **Footer** — logo, tagline, navegación y "Nexco © 2026".
>
> **Requisitos técnicos:** HTML/CSS/JS sin frameworks ni build; responsive (mobile-first
> con menú hamburguesa); accesible (contraste AA, `prefers-reduced-motion`, foco visible);
> animaciones CSS + IntersectionObserver. Entrega código de producción, limpio y comentado.

---

## ✔ Lo que ya dejé terminado por código (lo que el diseño "no suele poder")

Estas son las piezas funcionales/técnicas que ya implementé sobre el diseño, listas en
esta carpeta:

- **Panal (colmena) generado por SVG** con geometría exacta (filas 3-4-5-4-3 = 19
  hexágonos), celdas doradas que laten y una celda central sólida con gradiente.
  → `js/main.js` (`buildHoneycomb`).
- **Revelado al hacer scroll** con `IntersectionObserver` y retardos escalonados
  (`data-delay`), respetando `prefers-reduced-motion`.
- **Nav con estado dinámico** (fondo + blur al hacer scroll) y **barra de progreso** de lectura.
- **Menú móvil** accesible (hamburguesa animada, bloqueo de scroll, `aria-expanded`).
- **Formulario de contacto** con validación y `mailto:` (demo sin backend).
- **Sistema de diseño en CSS variables** (paleta, tipografía, radios, easing) para escalar.
- **Responsive real** verificado a 1280px y 375px sin overflow horizontal.
- **Logo oficial integrado**: recorté el PNG original (quité el margen transparente) para
  el nav y el pie, y extraje **solo el símbolo de panal** para el favicon/ícono.
- Textura de grano, glows radiales, marquee de valores y estados hover en dorado.

## ⚠ Pendientes de marca (del propio manual) para que completes

- **Correo/dominio oficial**: el formulario usa `hola@nexco.com` como marcador.
  Cámbialo en `js/main.js` por el correo real (dominio pendiente: `nexcodigital.com`
  o `nexcosocial.com`).
- **Eslogan personal de Naty**, **fotografía oficial de Naty**, **testimonios/casos de
  éxito** y **redes sociales prioritarias**: reserva secciones o reemplaza los
  marcadores cuando estén disponibles.
