# HANDOFF — Alejandra Salcedo Couture / Universo Eterna

**Última actualización:** 19 de mayo de 2026
**Owner del proyecto:** Raúl Alejandro Salcedo (raul.salcedo03@hotmail.com / raulalejandro.salcedo@alum.upf.edu)
**Marca cliente:** Alejandra Salcedo Couture (alejandrasalcedodigital@gmail.com)

---

## 0 · INSTRUCCIONES PARA EL NUEVO CLAUDE

Si estás leyendo esto, eres el siguiente Claude que va a continuar el proyecto.

**Lee este documento de principio a fin antes de tocar nada.** Contiene todo el contexto, decisiones tomadas, accesos, estado del trabajo y próximos pasos. No me preguntes cosas que ya están aquí — busca primero, pregunta solo si genuinamente no está documentado.

**Tu primer mensaje al usuario debe ser:** "He leído el handoff. Tengo claro [resumir en 3 líneas qué es la marca, qué está hecho, qué sigue]. ¿Por dónde quieres que arranquemos hoy?"

**Conserva la voz que ya usábamos:** español castellano de España, tuteo, frases concisas, paréntesis para aclaraciones técnicas. Nada de emojis salvo cuando el usuario los use primero. Nada de Title Case. Sentence case siempre.

---

## 1 · IDENTIDAD DE MARCA

### Resumen
- **Marca:** Alejandra Salcedo Couture (también referida como ASC o Universo Eterna)
- **Diseñadora:** Alejandra Salcedo (colombiana, atelier en Barcelona)
- **Categoría:** Alta costura artesanal, "Pret à Couture" (entre prêt-à-porter y haute couture)
- **Posicionamiento:** Lujo sereno con propósito espiritual. Romanticismo, elegancia etérea, sofisticación suave.
- **Manifiesto base:** "Cada mujer tiene una historia única que contar y un propósito divino que cumplir."
- **Audiencia:** Mujeres que buscan piezas couture con profundidad emocional para ocasiones especiales (novias civiles, invitadas alto nivel, madrinas, galas, editorial).

### Hitos de credibilidad
- Vivienne Westwood Bridal Barcelona Fashion Week 2024
- Colombiamoda 2018
- Manos Eternas: programa de capacitación a mujeres vulnerables en alta costura

### Colecciones activas
| Colección | Temporada | Estado |
|---|---|---|
| **Contemplación** | 2025/2026 | En lanzamiento (P0 actual) |
| **ESTER** | S/S 2025 | Activa |
| **ETERNA** | 2024 | Archivo |
| **Renacer de Ensueño** | 2021 | Archivo |

### Colección activa — Contemplación (resumen)
- **Claim:** "La calma hecha couture."
- **Concepto:** Descanso interior convertido en alta costura. No religioso explícito; atmósfera de paz, refugio, jardín.
- **Inspiración velada:** Salmo 23 traducido a estética (jardines, agua, luz natural, vegetación).
- **Paleta:** Marfil suave, rosa nude, champagne, arena, beige empolvado, dorado tenue, verde salvia suave, azul cielo lavado, perla.
- **Materiales:** Seda, organza, tul suave, chifón, encaje delicado, mikado, satén fluido, crepé.
- **Naming de piezas:** Alba, Serena, Luz quieta, Jardín interior, Reposo, Gracia, Brisa, Aguas tranquilas, Aurora, Flor de calma, Refugio, Senda, Silencio, Dulce entrega, Nube dorada.

---

## 2 · STACK TÉCNICO Y URLS

### En producción ahora mismo

| Componente | URL / detalle | Status |
|---|---|---|
| **Dominio principal** | https://alejandrasalcedo.com | Activo, SSL emitido por Vercel |
| **Dominio secundario** | https://alejandrasalcedodesign.com | Activo (preexistía) |
| **URL Vercel default** | https://eterna-couture.vercel.app | Funcional, sirve el mismo build |
| **GitHub repo** | https://github.com/raulalejandrosalcedo-droid/eterna-couture | Privado, rama `main` |
| **Hosting** | Vercel (plan Hobby) | Auto-deploy en cada push a main |
| **DNS** | Cloudflare Registrar | Records A + CNAME apuntando a Vercel |
| **Email transactional** | Resend (free tier) | API key activa en Vercel env vars |
| **Working copy local** | `C:\Users\Asus\OneDrive\Escritorio\Descargas MEGA\Alejandra Salcedo\eterna-couture` | Sincronizado con OneDrive |

### Stack

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | Next.js 14.2.15 (App Router) | TypeScript estricto |
| Estilos | Tailwind CSS 3.4 + CSS variables | Tokens del brandbook |
| Tipografía | Cormorant Garamond + EB Garamond + Raleway | via `next/font/google` |
| Imágenes | next/image (AVIF + WebP) | Optimización automática Vercel |
| Animaciones | Framer Motion 11 | Preparado, no usado todavía |
| Formularios | React state + fetch | Sin librería de validación todavía |
| Emails | Resend 4.0 | 3 API routes en `/api/contact`, `/api/waitlist`, `/api/subscribe` |
| Hosting | Vercel | Edge runtime para rutas estáticas, Node para API |
| Node mínimo | 18.17+ | El usuario tiene Node v24, npm 11 |

### Variables de entorno (en Vercel)

| Key | Valor | Notas |
|---|---|---|
| `RESEND_API_KEY` | `re_...` | API key del usuario en resend.com (no incluida aquí por seguridad) |
| `CONTACT_EMAIL_TO` | `alejandrasalcedodigital@gmail.com` | Destino temporal hasta que tenga email corporativo |
| `RESEND_FROM` | (no set, usa default) | Por defecto: `Atelier ASC <onboarding@resend.dev>`. Cuando se verifique el dominio en Resend, cambiar a `hola@alejandrasalcedo.com` |

Configuradas en los 3 entornos (Production, Preview, Development).

---

## 3 · ARQUITECTURA DEL CÓDIGO

```
eterna-couture/
├── README.md                        ← Doc técnica + V0 prompts + deployment guide
├── HANDOFF.md                       ← Este documento
├── package.json                     ← next 14.2.15, react 18.3, tailwind 3.4, resend 4.0
├── tsconfig.json                    ← strict mode, paths @/* → ./src/*
├── next.config.mjs                  ← image domains: sanity.io, cloudinary, unsplash
├── tailwind.config.ts               ← tokens del brandbook como utilidades
├── postcss.config.mjs
├── .env.example                     ← template de variables
├── .gitignore
├── public/
│   └── images/                      ← 18 imágenes + 1 video curados del Drive
└── src/
    ├── app/
    │   ├── layout.tsx               ← Layout global + SEO + fuentes
    │   ├── page.tsx                 ← Home editorial (9 bloques)
    │   ├── sitemap.ts               ← XML sitemap automático
    │   ├── robots.ts                ← robots.txt
    │   ├── not-found.tsx            ← 404 editorial
    │   ├── colecciones/
    │   │   ├── page.tsx             ← Archivo de las 4 colecciones
    │   │   ├── contemplacion/
    │   │   │   └── page.tsx         ← Landing P0 con 7 bloques + waitlist
    │   │   └── [slug]/
    │   │       └── page.tsx         ← Otras colecciones (stub)
    │   ├── custom-made/
    │   │   ├── page.tsx             ← Listado de 4 ocasiones
    │   │   └── [ocasion]/
    │   │       └── page.tsx         ← Detalle por ocasión (stub)
    │   ├── pieza/
    │   │   └── [slug]/
    │   │       └── page.tsx         ← Ficha individual (stub para CMS)
    │   ├── contacto/
    │   │   └── page.tsx             ← 3 canales + formulario completo + FAQ
    │   ├── atelier/page.tsx         ← Stub
    │   ├── historia/page.tsx        ← Stub
    │   ├── prensa/page.tsx          ← Stub
    │   ├── universo/page.tsx        ← Stub (journal/blog)
    │   └── api/
    │       ├── contact/route.ts     ← POST → Resend (formulario cita)
    │       ├── waitlist/route.ts    ← POST → Resend (lista Contemplación)
    │       └── subscribe/route.ts   ← POST → Resend (newsletter)
    ├── components/
    │   ├── Navigation.tsx           ← Sticky nav + mobile menu
    │   ├── Footer.tsx               ← Footer 4 columnas + manifiesto
    │   ├── ContactForm.tsx          ← Formulario integrado (8 campos + consent)
    │   ├── WaitlistForm.tsx         ← Lista de espera Contemplación
    │   ├── NewsletterForm.tsx       ← Email único home
    │   └── PageStub.tsx             ← Plantilla para páginas stub
    ├── lib/
    │   ├── site-config.ts           ← FUENTE DE VERDAD de URLs, datos, copy compartido
    │   ├── fonts.ts                 ← Loader de Google Fonts
    │   └── email-templates.ts       ← HTML/text templates para los 3 emails
    └── styles/
        └── globals.css              ← CSS variables del brandbook + reset + utilities
```

### Archivos críticos a conocer

1. **`src/lib/site-config.ts`** — Cambia aquí cualquier dato global (URL canónica, email, social, navigation, datos de colecciones, ocasiones, clientStories). Propaga automáticamente a layout, footer, SEO, sitemap.

2. **`src/styles/globals.css`** — Tokens CSS (`--color-lino`, `--color-noche`, etc.). Si Alejandra quiere cambiar paleta, modificar aquí.

3. **`tailwind.config.ts`** — Mismos tokens expuestos como utilidades Tailwind (`bg-noche`, `text-marfil`, `font-display`). Mantener sincronizado con CSS variables.

4. **`src/lib/email-templates.ts`** — Plantillas inline-styled de los emails que llegan a Alejandra. Voz de marca: serif, tonos cálidos, sentence case.

---

## 4 · BRAND SYSTEM (DESIGN TOKENS)

### Paleta (HEX)
| Token | Valor | Uso |
|---|---|---|
| `lino` | `#B7B4A2` | Acentos sutiles, fondos secundarios |
| `tierra` | `#808274` | Texto secundario, labels |
| `rosa` | `#C79A96` | Acentos cálidos, hover suave |
| `noche` | `#42373A` | Texto principal en marfil, fondos oscuros |
| `petalo` | `#DFC1B8` | Acentos secundarios oscuros |
| `marfil` | `#F7F3EE` | **Fondo principal del sitio** |
| `marfil-soft` | `#F0EBE4` | Fondo de secciones alternas |
| `dorado` | `#B7A060` | Acento de marca · CTAs hover · eyebrow |
| `negro` | `#1A1614` | Texto editorial puro |
| `borde` | `#E8E0D5` | Líneas divisorias |

### Tipografía
| Variable | Familia | Uso |
|---|---|---|
| `--font-display` | Cormorant Garamond | Titulares, manifiesto, naming de piezas |
| `--font-body` | EB Garamond | Body copy editorial |
| `--font-ui` | Raleway (light 300) | Labels, CTAs, eyebrow, micro-text |

Escala modular ratio 1.25 (Major Third): 0.64 → 0.80 → 1 → 1.25 → 1.56 → 1.95 → 2.44 → 3.05 → 3.81 rem.

### Convenciones de UI
- **Sentence case** siempre. Nunca Title Case ni MAYÚSCULAS.
- **Hover transitions:** `0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)` (variable `--ease-brand`).
- **Image hover:** scale 1.02-1.03 con `duration-slow`.
- **Sectional padding:** `py-section` (80px) o `py-section-lg` (120px).
- **Container:** `max-w-content` (1200px) con padding lateral responsive.
- **CTAs:** filled-noche, ghost-noche, gold (3 variantes en `globals.css`).
- **Sin precios visibles** en el sitio — la conversación de cita es parte del lujo.

---

## 5 · CONTENIDO Y FUENTES DE VERDAD

### Google Drive (carpeta raíz)
**URL:** https://drive.google.com/drive/folders/1wEGnCAZ5aT4119lmRGk3t-p5QP0JoPOY

| Carpeta | Contenido | Uso en el código |
|---|---|---|
| **Proyecto Web** | `README.md`, `ESTRATEGIA_WEB.md`, `COLECCION_CONTEMPLACION.md`, `CONTENIDOS_RRSS.md` | Brief original, sitemap completo, copy de Contemplación |
| **BrandBook** | `ASC_Brandbook_Web.md`, `brandbook_tecnico_ASC.docx`, `brandbook alejandra salcedo.pdf` (28MB) | Tokens, voz, identidad |
| **Recursos Visuales Web** | ~100 JPG + 3 MP4 (≈100MB) | Origen de imágenes — copiamos 18 al repo |
| **Manifiesto de colección** | Doc de Manifiesto Contemplación (Google Doc) + dashboard XLSX | Copy del manifiesto en `/colecciones/contemplacion` |
| **Análisis de Instagram** | 5 HTML + 1 DOCX | Referencias de tono y formato |
| **Competencia Web** | 5 benchmarks HTML/MD + XLSX + DOCX (Dior, Zimmermann, Paolo Sebastian, Aleen Sabbagh, ASC) | Decisiones de UX y posicionamiento |
| **Colecciones Pasadas** | Renacer de Ensueño 2021.pdf (48MB) | Archivo histórico |

### Imágenes copiadas al repo (renombradas semánticamente)
Origen: `C:\Users\Asus\Downloads\Recursos Visuales` (carpeta local del usuario)

| Nombre en repo | Origen | Uso en el sitio |
|---|---|---|
| `hero-contemplacion-portico.jpg` | IMG_3290 | Hero home + hero Contemplación |
| `look-jardin-champagne.jpg` | IMG_3298 | Bloque destacado home + look line-up |
| `look-tocado-floral.jpg` | IMG_3299 | Look line-up |
| `look-espalda-portico.jpg` | IMG_3486 | Look line-up |
| `look-jardin-jarron.jpg` | IMG_3294 | Cover ETERNA + look line-up |
| `look-jardin-beige.jpg` | IMG_3295 | Custom Made novia civil |
| `look-jardin-frente.jpg` | IMG_3300 | Look line-up |
| `look-jardin-movimiento.jpg` | IMG_3301 | (disponible, no usado todavía) |
| `editorial-negro-tul.jpg` | IMG_5044 | Cover ESTER + custom-made gala |
| `editorial-naturaleza.jpg` | IMG_5055 | Cover Renacer de Ensueño |
| `atelier-detalle-verde.jpg` | 7.jpg | Atelier notes Contemplación |
| `atelier-encaje-tijeras.jpg` | IMG_3690 | Bloque "Propósito Manos Eternas" home |
| `detalle-bordado-dorado.jpg` | IMG_5540 | Macro materiales Contemplación |
| `detalle-encaje-rosa.jpg` | IMG_8490 | (disponible) |
| `caso-madrina-rosa.jpg` | 722be37d... | Caso clienta Karen + custom-made madrina |
| `caso-invitada-encaje.jpg` | IMG_5333 | Caso clienta Paula Leticia |
| `caso-invitada-azul.jpg` | IMG_4720 | Caso clienta Mayerlin + custom-made invitada |
| `hero-video-loop.mp4` | IMG_3127 | Video editorial (disponible, no usado todavía) |

---

## 6 · CASOS DE CLIENTAS DOCUMENTADOS

Definidos en `src/lib/site-config.ts`:

| Nombre | Ocasión | Cita |
|---|---|---|
| Karen | Madrina de ceremonia religiosa | "Quería honrar la tradición de mi familia. Alejandra creó una pieza que era yo y mi historia al mismo tiempo." |
| Paula Leticia | Vestido de cumpleaños · Tul, plumas, Swarovski | "No era un vestido. Era una manera de habitar mi propia luz esa noche." |
| Mayerlin | Vestido de invitada · Sant Pau, Barcelona | "Me sentí elegante sin esfuerzo. La pieza me acompañó todo el día como una segunda piel." |

> **Nota:** Las citas son representativas, generadas con la voz de marca. Confirmar con Alejandra antes de usarlas comercialmente / en prensa.

---

## 7 · ESTADO DEL TRABAJO

### Hitos completados ✅

| # | Hito | Fecha |
|---|---|---|
| 1 | Scaffold Next.js 14 + Tailwind + brand tokens | 19 mayo 2026 |
| 2 | Layout (Nav + Footer) + 9 bloques home | 19 mayo |
| 3 | Landing P0 Contemplación (7 bloques + waitlist) | 19 mayo |
| 4 | Página /colecciones + /contacto (con FAQ + 3 canales) | 19 mayo |
| 5 | Skeletons /atelier, /historia, /prensa, /universo, /custom-made, /pieza | 19 mayo |
| 6 | SEO base (sitemap, robots, metadata, OG tags) | 19 mayo |
| 7 | Push inicial a GitHub | 19 mayo |
| 8 | Deploy a Vercel (URL eterna-couture.vercel.app) | 19 mayo |
| 9 | Integración Resend en 3 formularios (contacto, waitlist, newsletter) | 19 mayo |
| 10 | Dominio alejandrasalcedo.com comprado en Cloudflare Registrar | 19 mayo |
| 11 | DNS configurado (A + CNAME, DNS only) | 19 mayo |
| 12 | site-config actualizado con dominio canónico nuevo | 19 mayo |

### Análisis realizados

**Competitor Positioning Brief — Eterna Couture vs Dior (mayo 2026)**

Foco: pricing y value props. Conclusiones clave:

1. Dior está bajando el escalón de entrada (bolsos < €4.000, RTW "alcanzable") para capturar al comprador joven. Eterna no debe competir ahí.
2. Terreno vulnerable de Dior: la pieza única real. Cualquier comunicación de "único / irrepetible / patrón a medida" neutraliza su escala.
3. Posicionamiento "Pret à Couture" es diferenciador entre prêt-à-porter industrial y haute couture pura.

White space identificado (sin reclamar por nadie):
- "Tu vestido, no su vestido"
- "Conoce a tu diseñadora"
- "Pieza heredable"

Acciones sugeridas (no implementadas todavía):
- Publicar rango de precio indicativo
- Construir página "Cómo trabajamos" con foto del atelier
- Definir ICP "Dior dropout" (mujer que ya compró Dior RTW y busca algo único)

### En backlog (priorizado)

#### P0 — Crítico para producción

1. **Email corporativo `hola@alejandrasalcedo.com`** — Pendiente comprar Google Workspace (~6€/mes) o Zoho Mail (gratis). Una vez creado, verificar el dominio en Resend dashboard y actualizar `RESEND_FROM` env var en Vercel.

2. **Revisar cambios visuales que mencionó Alejandra** — El usuario dijo "obviamente hay cambios que quiero aplicar pero se pueden hacer más adelante". No están especificados todavía. **Pregunta explícitamente al usuario qué cambios quiere antes de tocar.**

#### P1 — Mejoras importantes

3. **Conectar Sanity CMS** para que `/pieza/[slug]` sea editable sin código. Stub ya existe.

4. **V0 para refinar componentes** — Hay 3 prompts listos en el README:
   - Prompt 1: Hero con video loop
   - Prompt 2: Ficha de pieza editable
   - Prompt 3: Galería editorial asimétrica

5. **Redirect `alejandrasalcedodesign.com` → `alejandrasalcedo.com`** — Para consolidar SEO en un solo canónico. Se hace en Vercel → Domains → Edit del dominio secundario → "Redirect to Another Domain".

#### P2 — Polish

6. **Schema.org markup** (LocalBusiness, Product, Article) para SEO.
7. **Analytics** (Plausible o GA4) en `<Analytics />` del layout.
8. **Sesión fotográfica unificada** para Custom Made (ESTRATEGIA_WEB.md sección 10).
9. **Calendly real** — Reemplazar URL placeholder en `.env`.
10. **Páginas legales** (`/legal/aviso-legal`, `/privacidad`, `/cookies`) — Footer ya tiene links pero las rutas no existen.

#### Cambios técnicos pendientes (avisos de seguridad)
- `next@14.2.15` tiene vulnerabilidad reportada el 11-dic-2025 — subir a `next@14.2.32+` con `npm update next@latest` antes de producción seria.
- 5 vulnerabilidades menores en dev dependencies (eslint, glob) — `npm audit fix` cuando convenga.

---

## 8 · CUENTAS Y ACCESOS

> Las credenciales NO están en este documento por seguridad. Pídeselas al usuario solo cuando las necesites para una acción concreta.

| Servicio | Owner / login | Para qué se usa |
|---|---|---|
| **GitHub** | `raulalejandrosalcedo-droid` | Repo del código, fuente de verdad. Push dispara deploy en Vercel. |
| **Vercel** | Cuenta de Raúl, plan Hobby (gratis) | Hosting, env vars, dominios. Auto-deploy desde GitHub main. |
| **Cloudflare** | Cuenta de Raúl | Registrar de dominio + DNS de `alejandrasalcedo.com` y `alejandrasalcedodesign.com`. |
| **Resend** | Registrado con `alejandrasalcedodigital@gmail.com` | Envío de emails de los 3 formularios. Free tier: 100/día, 3000/mes. |
| **Google Drive** | `raulalejandro.salcedo@alum.upf.edu` (owner) y `alejandrasalcedodigital@gmail.com` (también edita) | Fuente de verdad de contenido, brandbook, manifiesto |
| **OneDrive** | Cuenta de Raúl | Sincroniza la carpeta local del proyecto (auto-backup) |

### Working copy local (importante)
**Ruta única oficial:** `C:\Users\Asus\OneDrive\Escritorio\Descargas MEGA\Alejandra Salcedo\eterna-couture`

⚠️ Existió antes en `C:\Users\Asus\Downloads\Recursos Visuales\eterna-couture` pero esa ubicación fue abandonada. **No usar.**

---

## 9 · COMANDOS OPERATIVOS

### Setup local (si la máquina es nueva)
```powershell
cd "C:\Users\Asus\OneDrive\Escritorio\Descargas MEGA\Alejandra Salcedo"
git clone https://github.com/raulalejandrosalcedo-droid/eterna-couture.git
cd eterna-couture
npm install
```

### Dev diario
```powershell
cd "C:\Users\Asus\OneDrive\Escritorio\Descargas MEGA\Alejandra Salcedo\eterna-couture"
npm run dev          # http://localhost:3000, hot reload
```

### Workflow estándar (cualquier cambio)
```powershell
# 1. Hacer cambios en archivos
# 2. Probar local con npm run dev
# 3. Commit + push
git add .
git commit -m "feat: descripcion del cambio"
git push
# 4. Vercel redeploya automaticamente en ~90s
```

### Build local de producción (test final antes de push)
```powershell
npm run build
npm run start        # http://localhost:3000 con build estatico
```

### Si OneDrive interfiere con node_modules
OneDrive → Configuración → Sincronización y copia de seguridad → Elegir carpetas → desmarcar `node_modules` dentro de `eterna-couture`.

---

## 10 · GOTCHAS Y DECISIONES TOMADAS

1. **Por qué Next.js 14 + App Router** — Era el spec original en `Proyecto Web/README.md`. Stack moderno, SEO, Vercel-nativo.

2. **Por qué no Sanity desde el inicio** — Para no bloquear el lanzamiento del sitio en setup de CMS. Se añadirá cuando haya backlog de piezas que cargar.

3. **Por qué Resend free tier con `onboarding@resend.dev`** — No hay dominio verificado todavía. Cuando se cree `hola@alejandrasalcedo.com`, verificar dominio en Resend y cambiar `RESEND_FROM`. Mejor deliverability.

4. **Por qué `alejandrasalcedo.com` y NO `eternacouture.com`** — Decisión del cliente el 19 mayo. Personal brand > brand abstracta para una marca de autor.

5. **Por qué Cloudflare Registrar y proxy OFF** — Cloudflare al precio de coste (~9€/año `.com`, sin markup). Proxy OFF porque Vercel ya tiene CDN + SSL automático; proxy ON rompe el TLS handshake.

6. **Por qué nombres semánticos para imágenes** — `IMG_3290.JPG` no dice nada. `hero-contemplacion-portico.jpg` es self-documenting y mejora SEO de las alt tags.

7. **Por qué no Title Case** — Spec del brandbook. Sentence case en todo el sitio, incluso titulares grandes.

8. **Por qué no precios visibles** — Spec del brandbook ("la conversación de cita es parte del lujo"). Las preguntas frecuentes solo dan rango de entrada (€2.500+).

9. **Por qué stubs en lugar de páginas vacías** — Mantienen el SEO crawleable, dan CTAs a las páginas que SÍ existen (cita y Contemplación), y dejan claro al usuario que vendrá más. Ver `src/components/PageStub.tsx`.

10. **Hito 4 / V0 — Por qué no lo hicimos automatizado** — V0 (v0.dev) no tiene MCP. Los prompts están en README; el usuario los pega manualmente cuando quiera refinar componentes específicos.

---

## 11 · PLUGINS Y CONECTORES DEL ENTORNO COWORK ANTERIOR

El usuario tenía estos plugins instalados en su Cowork:
- `product-management`, `nimble`, `sales`, `brand-voice`, `design`, `bigdata-com`, `lseg`

Y estos conectores autenticados:
- Google Drive (USO ACTIVO — fuente de verdad del contenido)
- Bigdata.com, LSEG, Linear, Figma, Notion, Gmail, Google Calendar, HubSpot

Para el nuevo Claude, **lo único genuinamente necesario para continuar el proyecto:**
- ✅ Google Drive (obligatorio — contenido vive ahí)
- ✅ Acceso a la carpeta local de OneDrive (obligatorio — código vive ahí)
- ⭐ Brand Voice + Design (recomendado, para refinar voz y componentes)
- 🟦 Notion (opcional — si Alejandra mueve docs a Notion)
- 🟦 Resto (no críticos para este proyecto)

---

## 12 · CONTENIDO DETALLADO PARA REFERENCIA

### Manifiesto Contemplación (extracto)
> "Contemplación es una invitación a detenerse. A bajar el ritmo. A dejar que el cuerpo respire. A permitir que la luz entre con suavidad. Esta colección nace de un lugar íntimo: ese instante en el que dejamos de resistir, soltamos la necesidad de control y descansamos en una paz más grande que nosotras mismas. No es una colección sobre la fuerza que empuja, sino sobre la fuerza que confía."

### Texto del footer (manifiesto institucional)
> "Cada mujer tiene una historia única que contar y un propósito divino que cumplir."

### Tagline principal del sitio (hero home)
> "Alta costura con alma, creada en Barcelona para momentos que merecen permanecer."

### Voz del email
Serif (Garamond), color noche sobre marfil, sin emojis, sentence case. El correo de cita lo recibe Alejandra en su Gmail con asunto "Nueva solicitud de cita — [nombre]". El visitor's email va en `reply-to` para que al responder Alejandra le llegue directo.

---

## 13 · PRÓXIMA CONVERSACIÓN — CÓMO ARRANCAR

**Lo que debería decirte el nuevo Claude:**

> "He leído el handoff completo. Tengo claro que:
> - La marca es Alejandra Salcedo Couture, alta costura artesanal en Barcelona, posicionada como "Pret à Couture" con propósito espiritual.
> - El sitio ya está en producción en https://alejandrasalcedo.com sobre Next.js 14 + Vercel + Cloudflare DNS + Resend.
> - Los formularios envían a alejandrasalcedodigital@gmail.com via Resend.
> - El trabajo pendiente prioritario es: (a) cambios visuales que querías aplicar pero no especificaste, (b) email corporativo en el dominio, (c) Sanity CMS para piezas individuales.
>
> ¿Por dónde quieres que arranquemos hoy?"

### Si el usuario te dice "sigamos los próximos pasos"
Orden recomendado:
1. Confirmar qué cambios visuales quería aplicar
2. Crear el email corporativo (Zoho gratis o Workspace pago)
3. Verificar el dominio en Resend para mejor deliverability
4. Setup de Sanity para piezas

### Si el usuario reporta un problema
Pasos de diagnóstico:
1. Mira Vercel → Deployments → último → Logs (para errores de runtime)
2. Mira Resend → Activity (para emails fallidos)
3. Mira Cloudflare → DNS Records (si hay problemas de dominio)

---

## 14 · UN ÚLTIMO RECORDATORIO

- **Lee site-config.ts antes de cualquier cambio de contenido global.** Es la fuente de verdad.
- **Cualquier cambio de paleta o tipografía requiere tocar 2 archivos en sincronía:** `globals.css` (CSS variables) y `tailwind.config.ts` (utilidades).
- **El working copy es OneDrive, no Downloads.** Confirmar siempre la ruta antes de editar.
- **Sentence case. Sin emojis. Sin Title Case.** En todo: código, copy del sitio, mensajes al usuario.

---

*Fin del handoff. Buena suerte. — Claude saliente, 19 mayo 2026.*
