# Eterna Couture — Sitio web

> Alta costura con alma, creada en Barcelona para momentos que merecen permanecer.

Sitio web oficial de **Alejandra Salcedo Couture / Universo Eterna**, construido siguiendo el brief estratégico, el brandbook y la colección Contemplación.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS + CSS variables (brandbook) |
| Tipografía | Cormorant Garamond + EB Garamond + Raleway (next/font) |
| Imágenes | next/image (AVIF + WebP) |
| Animaciones | Framer Motion (preparado) |
| Formularios | React Hook Form (componentes listos) |
| Hosting | Vercel |
| DNS / CDN edge | Cloudflare (delegando NS o como proxy) |
| Repo | GitHub |
| CMS futuro | Sanity (esquemas en `cms/schemas` por crear) |

---

## Estructura

```
eterna-couture/
├── public/
│   └── images/                 ← 18 imágenes curadas (Recursos Visuales)
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Layout global + SEO + fuentes
│   │   ├── page.tsx            ← Home editorial (9 bloques)
│   │   ├── colecciones/
│   │   │   ├── page.tsx        ← Archivo de colecciones
│   │   │   ├── contemplacion/  ← Landing P0 (7 bloques + lista de espera)
│   │   │   └── [slug]/         ← Otras colecciones (stub)
│   │   ├── custom-made/
│   │   │   ├── page.tsx        ← Listado por ocasión
│   │   │   └── [ocasion]/      ← Detalle por ocasión (stub)
│   │   ├── pieza/[slug]/       ← Ficha individual (stub para CMS)
│   │   ├── atelier/            ← Stub
│   │   ├── historia/           ← Stub
│   │   ├── prensa/             ← Stub
│   │   ├── universo/           ← Stub (journal)
│   │   ├── contacto/           ← Formulario completo + Calendly + WhatsApp + FAQ
│   │   ├── sitemap.ts          ← XML sitemap automático
│   │   ├── robots.ts           ← robots.txt
│   │   └── not-found.tsx       ← 404 editorial
│   ├── components/
│   │   ├── Navigation.tsx      ← Nav sticky con mobile menu
│   │   ├── Footer.tsx          ← Footer 4 columnas
│   │   ├── ContactForm.tsx     ← Formulario integrado de cita
│   │   ├── WaitlistForm.tsx    ← Lista de espera Contemplación
│   │   ├── NewsletterForm.tsx  ← Captura de email home
│   │   └── PageStub.tsx        ← Plantilla para páginas stub
│   ├── lib/
│   │   ├── site-config.ts      ← Configuración global (URLs, datos, copy)
│   │   └── fonts.ts            ← Loader de Google Fonts
│   └── styles/
│       └── globals.css         ← CSS variables del brandbook
├── tailwind.config.ts          ← Tokens del brandbook como utilidades
├── next.config.mjs
├── tsconfig.json
├── package.json
└── .env.example                ← Variables de entorno
```

---

## Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar y rellenar variables
cp .env.example .env.local

# 3. Levantar servidor de desarrollo
npm run dev          # http://localhost:3000

# 4. Build de producción
npm run build
npm run start
```

---

## Deployment — Paso a paso

### 1. Subir a GitHub

```bash
cd eterna-couture
git init
git add .
git commit -m "feat: lanzamiento inicial — Universo Eterna"

# Crear repo en https://github.com/new (privado recomendado)
# Después:
git branch -M main
git remote add origin git@github.com:<tu-usuario>/eterna-couture.git
git push -u origin main
```

### 2. Deploy en Vercel (1 click)

1. Entra en [vercel.com/new](https://vercel.com/new) y autoriza GitHub.
2. Selecciona el repo `eterna-couture`.
3. Vercel detecta Next.js automáticamente — **no toques nada**.
4. En **Environment Variables**, añade las del `.env.example`:
   - `RESEND_API_KEY` (cuando configures Resend)
   - `CONTACT_EMAIL_TO=hola@eternacouture.com`
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. Click **Deploy**. En 60 segundos tienes una URL `eterna-couture.vercel.app`.

### 3. Conectar dominio `eternacouture.com` con Cloudflare

**Opción A — Cloudflare como DNS (recomendada):**

1. En Vercel → tu proyecto → Settings → Domains → añade `eternacouture.com` y `www.eternacouture.com`.
2. Vercel te dará 2 records:
   ```
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```
3. En Cloudflare → tu dominio → DNS → Records:
   - Crea ambos records con **Proxy status: DNS only** (gris). Vercel maneja el SSL.
4. SSL se activa automáticamente en Vercel en ~5 min.

**Opción B — Cloudflare como Proxy / CDN:**

1. Mismos records que arriba pero con **Proxy: Proxied** (naranja).
2. En Cloudflare → SSL/TLS → modo **Full (strict)**.
3. Ventaja: WAF, cache edge, analytics. Desventaja: doble layer SSL más complejo de debuggear.

**Email corporativo `hola@eternacouture.com`:**

- Vinculado a Google Workspace (~6€/mes/usuario): [workspace.google.com](https://workspace.google.com)
- Cloudflare → DNS → añade los MX records que Google te dé.

---

## Vercel V0 — prompts para refinar componentes

V0 (v0.dev) genera componentes React + Tailwind a partir de prompts. No tiene MCP, así que el flujo es:

1. Abre [v0.dev](https://v0.dev) y pega el prompt.
2. Copia el JSX resultante.
3. Reemplaza el componente correspondiente en `src/components/`.

### Prompt 1 — Hero con video loop

```
Build a Next.js + Tailwind hero section for a high-end couture fashion brand.
Full viewport (h-screen), background video loop muted/autoplay covering 100%,
overlay gradient from bottom (rgba(26,22,20,0.7) to transparent).

Centered text bottom-left:
- Eyebrow: "Universo Eterna · Barcelona" (font-ui xs uppercase tracking-widest)
- Headline (font-display, 5xl): "Alta costura con alma, creada en Barcelona para momentos que merecen permanecer."
- Two CTAs: "Solicitar cita privada" (filled marfil bg) + "Ver colecciones" (ghost border)

Use these design tokens (define as CSS vars):
--color-marfil: #F7F3EE; --color-noche: #42373A; --color-dorado: #B7A060;
--font-display: 'Cormorant Garamond'; --font-ui: 'Raleway' light 300.

Aesthetic: editorial, slow, minimal. Animations 0.8s ease-out. No emoji.
```

### Prompt 2 — Ficha de pieza (`/pieza/[slug]`)

```
Build a Next.js product detail page for a couture haute fashion piece.
Layout: 60/40 split — left = sticky image gallery (8 thumbnails switching a hero),
right = piece info that scrolls.

Right column sections in order:
1. Eyebrow + name (font-display italic 4xl, e.g. "Serena")
2. Collection chip (Contemplación 2025/2026)
3. Materials list with bullet dots
4. Construction technique paragraph
5. Story block (italic, max 3 lines, "Para Karen, que quería honrar...")
6. Process meta — "80 horas · 3 pruebas · Confección artesanal"
7. CTA "Solicitar pieza similar" (filled noche) + "Agendar consulta privada" (ghost)

Tokens:
--color-marfil: #F7F3EE; --color-noche: #42373A; --color-dorado: #B7A060;
Use font-display Cormorant Garamond, font-ui Raleway.
Slow 0.6s hover transitions. Generous whitespace (80px+ section padding).
```

### Prompt 3 — Galería editorial asimétrica

```
React + Tailwind editorial photo gallery for a couture brand. Asymmetric grid:
columns of 40%/60% alternating, each image with aspect 3/4 or 4/5.

Hover: subtle scale(1.02), 0.6s ease-out.
Caption appears on hover (translate from bottom): name + materials + "Ver pieza →"
Use color tokens marfil/noche/dorado as defined.
Mobile: stack full-width with 16px gap.
Lazy-load with next/image and blur placeholder.
```

---

## Próximos pasos sugeridos

| Prioridad | Tarea | Cómo |
|---|---|---|
| **P0** | Conectar Resend para que el formulario envíe emails reales | Crear `src/app/api/contact/route.ts` con `resend.emails.send` |
| **P0** | Activar dominio en Vercel + Cloudflare | Pasos arriba |
| **P0** | Crear email `hola@eternacouture.com` | Google Workspace |
| **P1** | Conectar Sanity CMS para piezas individuales | `npm create sanity@latest` + esquemas en `cms/schemas/` |
| **P1** | Sesión fotográfica unificada para Custom Made | Documentado en ESTRATEGIA_WEB.md sección 10 |
| **P1** | Implementar Plausible / GA4 | Componente `<Analytics />` en layout |
| **P2** | Activar Calendly real | Reemplazar URL en `.env.local` |
| **P2** | Refinar componentes con V0 (prompts arriba) | v0.dev |
| **P2** | Schema.org markup (LocalBusiness, Product, Article) | `<script type="application/ld+json">` en cada página |

---

## Filosofía de diseño

- **Lentitud consciente** — animaciones 0.4–0.8s ease-in-out
- **Espacio en blanco generoso** — 80px+ padding vertical
- **Imágenes como protagonistas** — el texto apoya
- **Un solo CTA por sección** — jerarquía clara
- **Sin precios en la web** — el contacto personal es parte de la experiencia
- **Sentence case** — nunca Title Case ni MAYÚSCULAS

---

## Performance — objetivos

| Métrica | Target |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | 100 |

next/image + AVIF + Vercel CDN + preload de fuentes ya cubren la mayoría.

---

## Licencia

Sitio propietario de Alejandra Salcedo Couture. © 2026.
