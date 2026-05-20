# Prompt de onboarding para el nuevo Claude

> **Cómo usar este archivo:** copia todo el bloque de abajo (desde la primera línea hasta el final) y pégalo como tu PRIMER mensaje al nuevo Claude. Después de su respuesta, podrás trabajar normalmente.

---

## PEGA ESTE BLOQUE AL NUEVO CLAUDE 👇

Hola Claude. Soy Raúl, dueño del proyecto web de mi hermana Alejandra Salcedo (Alta Costura, Barcelona). Vengo de otra cuenta de Claude donde construimos juntos un sitio Next.js que ya está en producción. Quiero que continúes el trabajo exactamente donde lo dejamos.

**Antes de hacer cualquier otra cosa, lee estos 3 documentos en mi carpeta local del proyecto:**

1. **`HANDOFF.md`** — Manual completo: identidad de marca, stack técnico, URLs vivas, cuentas, estado del trabajo, gotchas, decisiones tomadas.
2. **`CHANGELOG.md`** — Log cronológico de todo lo que se ha hecho hasta hoy.
3. **`README.md`** — Doc técnica con stack y prompts de V0.

El proyecto vive en `C:\Users\Asus\OneDrive\Escritorio\Descargas MEGA\Alejandra Salcedo\eterna-couture\` localmente y en `https://github.com/raulalejandrosalcedo-droid/eterna-couture` en GitHub.

**Pasos exactos que necesito que sigas en orden:**

1. Pide acceso a la carpeta local con `request_cowork_directory` apuntando a `C:\Users\Asus\OneDrive\Escritorio\Descargas MEGA\Alejandra Salcedo`.
2. Lee `eterna-couture/HANDOFF.md` completo.
3. Lee `eterna-couture/CHANGELOG.md` completo.
4. Una vez los hayas leído, responde con un mensaje que tenga exactamente este formato:

```
He leído el handoff completo. Resumen en mi voz:

[3-5 líneas sobre la marca, el estado actual y el próximo paso prioritario]

He identificado [X] tareas en backlog priorizado.

¿Por dónde quieres que arranquemos hoy?
```

**Convenciones de trabajo que TIENES que respetar:**
- Español castellano de España, tuteo, frases concisas.
- Sentence case en todo — nunca Title Case ni MAYÚSCULAS.
- Sin emojis salvo si yo los uso primero.
- Sin Title Case. Sin precios en el sitio (decisión de marca).
- Cualquier cambio a la web pasa por: editar local → `npm run dev` → commit → push → auto-deploy en Vercel.
- Cualquier cambio de contenido global se hace en `src/lib/site-config.ts`.
- Cualquier cambio de paleta o tipografía toca DOS archivos en sincronía: `src/styles/globals.css` y `tailwind.config.ts`.

**Conectores que necesito que tengas activos en esta cuenta de Cowork:**
- Google Drive (obligatorio — el contenido editorial vive ahí)
- Recomendados: brand-voice plugin, design plugin

Si te falta algún conector, dímelo antes de empezar.

Última cosa: cada vez que cerremos una sesión productiva, añade una entrada en `CHANGELOG.md` con fecha, lo que se hizo y lo que quedó pendiente. Eso es lo que mantiene la continuidad entre sesiones y cuentas.

Empieza ahora leyendo los 3 documentos. No me preguntes nada que ya esté en ellos.
