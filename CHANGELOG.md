# CHANGELOG — Universo Eterna

> Log cronológico del proyecto. Cada sesión productiva añade una entrada al final.
> Formato: `## YYYY-MM-DD · [tipo] Título corto` → bullet points de lo hecho → bullet points de pendientes.
> Tipos: `feat`, `fix`, `chore`, `docs`, `infra`, `content`, `analysis`.

---

## 2026-05-19 · [feat] Lanzamiento inicial del sitio en producción

**Hecho:**
- Scaffold Next.js 14 + TypeScript + Tailwind + brand tokens
- Layout (Navigation sticky + Footer 4 columnas con manifiesto)
- Home editorial con 9 bloques (hero, autoridad, Contemplación, atelier, ocasiones, casos clientas, propósito, newsletter, footer)
- Landing P0 `/colecciones/contemplacion` con 7 bloques (hero, manifiesto, paleta 7 tonos, line-up 6 looks, atelier notes, waitlist, CTA)
- Página `/colecciones` con archivo editorial de las 4 colecciones
- Página `/contacto` con 3 canales (email, Calendly, WhatsApp) + formulario completo de 8 campos + FAQ de 4 preguntas
- Stubs editoriales: `/atelier`, `/historia`, `/prensa`, `/universo`, `/custom-made`, `/pieza/[slug]`
- SEO base: sitemap.xml, robots.txt, Open Graph tags, Twitter Cards
- 404 editorial con CTA a Contemplación
- 18 imágenes curadas del repositorio local + 1 video, renombradas semánticamente

**Infraestructura:**
- Push inicial a GitHub: `https://github.com/raulalejandrosalcedo-droid/eterna-couture` (repo privado)
- Deploy automatico en Vercel: `https://eterna-couture.vercel.app`
- 3 API routes con Resend integration: `/api/contact`, `/api/waitlist`, `/api/subscribe`
- Env vars en Vercel: `RESEND_API_KEY`, `CONTACT_EMAIL_TO=alejandrasalcedodigital@gmail.com`
- Dominio principal: `alejandrasalcedo.com` comprado en Cloudflare Registrar
- DNS records: A `@` → `76.76.21.21` (DNS only), CNAME `www` → `cname.vercel-dns.com` (DNS only)
- SSL emitido automáticamente por Vercel
- `site-config.ts` actualizado con URL canónica `alejandrasalcedo.com` y email `hola@alejandrasalcedo.com`

**Análisis realizado:**
- Competitor Positioning Brief Eterna vs Dior (foco pricing y value props). Conclusión clave: Dior baja escalón de entrada a < €4.000 para capturar comprador joven; Eterna debe NO competir ahí y reforzar terreno bespoke real / pieza heredable / "conoce a tu diseñadora".

**Pendiente al cierre de sesión:**
- Confirmar y aplicar "cambios visuales" que el usuario mencionó pero no especificó
- Crear email corporativo `hola@alejandrasalcedo.com` (Zoho gratis o Google Workspace ~6€/mes)
- Verificar dominio en Resend → cambiar `RESEND_FROM` para mejor deliverability
- Conectar Sanity CMS para que `/pieza/[slug]` sea editable
- Refinar componentes con V0 (3 prompts listos en README.md)
- Redirect `alejandrasalcedodesign.com` → `alejandrasalcedo.com` en Vercel
- Páginas legales (`/legal/aviso-legal`, `/privacidad`, `/cookies`)
- Schema.org markup (LocalBusiness, Product)
- Subir Next.js a 14.2.32+ (parche de seguridad)
- `npm audit fix` para 5 vulnerabilidades menores en dev deps

**Documentos generados:**
- `HANDOFF.md` — Manual completo para continuidad entre Claudes/sesiones
- `ONBOARDING_PROMPT.md` — Prompt listo para pegar al siguiente Claude
- `CHANGELOG.md` — este archivo

**Cambio de cuenta de Claude:** Sesión cerrada el 19 mayo 2026. Próximo Claude recibe HANDOFF.md + este CHANGELOG como contexto.

---

<!-- Nuevas entradas se añaden ABAJO en orden cronológico ascendente.
     Cada Claude que cierre una sesión productiva debe añadir su bloque aquí. -->
