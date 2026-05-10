import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Contemplación · Colección de Alta Costura',
  description:
    'Contemplación: colección couture de Alejandra Salcedo Couture. Sedas, organzas y tules suaves que traducen la paz interior en siluetas etéreas. Barcelona · A medida.',
  openGraph: {
    title: 'Contemplación · Alejandra Salcedo Couture',
    description: 'La calma hecha couture. Una colección para habitar la paz.',
    images: ['/images/hero-contemplacion-portico.jpg'],
  },
};

const palette = [
  { hex: '#F7F3EE', name: 'Silencio', subtitle: 'Marfil suave' },
  { hex: '#DFC1B8', name: 'Amanecer', subtitle: 'Rosa nude' },
  { hex: '#E8D9C0', name: 'Luz quieta', subtitle: 'Champagne' },
  { hex: '#D8C7AA', name: 'Jardín', subtitle: 'Arena clara' },
  { hex: '#B7A060', name: 'Destello', subtitle: 'Dorado tenue' },
  { hex: '#C4CFC0', name: 'Brisa', subtitle: 'Verde salvia' },
  { hex: '#C8D3DC', name: 'Agua', subtitle: 'Azul cielo lavado' },
];

const looks = [
  { name: 'Alba', image: '/images/look-jardin-champagne.jpg', materials: 'Organza de seda · Drapeado lateral' },
  { name: 'Serena', image: '/images/look-jardin-jarron.jpg', materials: 'Mikado ligero · Capas vaporosas' },
  { name: 'Luz quieta', image: '/images/look-tocado-floral.jpg', materials: 'Tul ilusión · Tocado dorado' },
  { name: 'Refugio', image: '/images/look-jardin-beige.jpg', materials: 'Crepé suave · Silueta columna' },
  { name: 'Aurora', image: '/images/look-espalda-portico.jpg', materials: 'Organza · Drapeado de espalda' },
  { name: 'Brisa', image: '/images/look-jardin-frente.jpg', materials: 'Chifón · Mangas caídas' },
];

const materials = [
  'Seda', 'Organza', 'Tul suave', 'Chifón',
  'Encaje delicado', 'Mikado ligero', 'Satén fluido', 'Crepé suave',
];

export default function ContemplacionPage() {
  return (
    <>
      {/* ============================================================
         BLOQUE 1 — HERO EDITORIAL
         ============================================================ */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-noche">
        <Image
          src="/images/hero-contemplacion-portico.jpg"
          alt="Vestido couture champagne en pórtico — Contemplación"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-noche/30" />
        <div className="relative text-center text-marfil container-content">
          <p className="font-ui text-xs tracking-widest uppercase mb-6 opacity-90">
            Colección 2025/2026
          </p>
          <h1 className="font-display italic text-5xl md:text-7xl mb-6 leading-[1]">
            Contemplación
          </h1>
          <p className="font-display text-xl md:text-2xl mb-12 max-w-xl mx-auto">
            La calma hecha couture.
          </p>
          <a
            href="#lista-espera"
            className="inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase bg-marfil text-noche px-8 py-4 hover:bg-dorado hover:text-marfil transition-all duration-medium ease-brand"
          >
            Acceso a lista privada
          </a>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 2 — MANIFIESTO
         ============================================================ */}
      <section className="py-section-lg">
        <div className="container-content max-w-3xl">
          <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-6 text-center">
            Manifiesto
          </p>
          <div className="space-y-6 font-body text-lg md:text-xl text-noche/85 leading-relaxed">
            <p>
              <strong className="font-medium text-noche">Contemplación</strong> es
              una invitación a detenerse. A bajar el ritmo. A dejar que el cuerpo
              respire. A permitir que la luz entre con suavidad.
            </p>
            <p>
              Esta colección nace de un lugar íntimo: ese instante en el que
              dejamos de resistir, soltamos la necesidad de control y descansamos
              en una paz más grande que nosotras mismas.
            </p>
            <p className="font-display italic text-2xl md:text-3xl text-tierra leading-snug pt-4">
              No es una colección sobre la fuerza que empuja, sino sobre la fuerza
              que confía.
            </p>
            <p>
              Cada silueta está diseñada para envolver sin oprimir. Cada tejido cae
              como una caricia. Cada tono pastel evoca una calma distinta: la luz
              del amanecer, el reflejo del agua, la suavidad de una flor, el
              silencio de un jardín.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 3 — PALETA Y MATERIALES
         ============================================================ */}
      <section className="bg-marfil-soft py-section-lg">
        <div className="container-content">
          <div className="max-w-2xl mb-16">
            <p className="font-ui text-xs tracking-widest uppercase text-tierra mb-4">
              Paleta y materiales
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Tonos iluminados por el sol, tejidos que respiran.
            </h2>
          </div>

          {/* Paleta */}
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-4 mb-16">
            {palette.map((c) => (
              <div key={c.name} className="text-center">
                <div
                  className="aspect-square w-full rounded-full mb-3 border border-borde"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
                <p className="font-display text-base text-noche">{c.name}</p>
                <p className="font-ui text-xs text-tierra tracking-wide">{c.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Materiales */}
          <div className="border-t border-borde pt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/detalle-bordado-dorado.jpg"
                alt="Macro de bordado dorado sobre tul"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-6">
                Seda, organza y silencio.
              </h3>
              <p className="font-body text-lg text-noche/80 mb-6 leading-relaxed">
                Hay tejidos que no pesan: acompañan, envuelven y dejan respirar.
                Exploramos sedas, organzas y tules suaves hasta encontrar el
                equilibrio entre estructura y fluidez.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {materials.map((m) => (
                  <li key={m} className="font-body text-base text-noche flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-dorado" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 4 — LOOK LINE-UP
         ============================================================ */}
      <section className="py-section-lg">
        <div className="container-content">
          <div className="max-w-2xl mb-16">
            <p className="font-ui text-xs tracking-widest uppercase text-tierra mb-4">
              Line-up
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Seis piezas. Una emoción común.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {looks.map((look, idx) => (
              <article key={look.name} className={`group ${idx % 2 === 1 ? 'lg:mt-12' : ''}`}>
                <div className="aspect-[3/4] relative overflow-hidden bg-marfil-soft mb-5">
                  <Image
                    src={look.image}
                    alt={`Look ${look.name} — ${look.materials}`}
                    fill
                    className="object-cover transition-transform duration-slow ease-brand group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="font-display italic text-2xl text-noche mb-2">
                  {look.name}
                </h3>
                <p className="font-ui text-xs tracking-wide uppercase text-tierra">
                  {look.materials}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 5 — ATELIER NOTES
         ============================================================ */}
      <section className="bg-marfil-soft py-section-lg">
        <div className="container-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] relative overflow-hidden order-2 md:order-1">
            <Image
              src="/images/atelier-detalle-verde.jpg"
              alt="Detalle de tejido verde en el atelier"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-4">
              Atelier · Notas técnicas
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">
              Cada pieza, una conversación con el cuerpo.
            </h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-display italic text-xl text-noche mb-1">Drapeado</dt>
                <dd className="font-body text-base text-noche/75">
                  Construcción sobre maniquí (moulage). El tejido encuentra su forma
                  acompañando la silueta, no imponiéndose sobre ella.
                </dd>
              </div>
              <div>
                <dt className="font-display italic text-xl text-noche mb-1">Transparencia</dt>
                <dd className="font-body text-base text-noche/75">
                  Capas de organza y tul ilusión que generan profundidad sin peso.
                </dd>
              </div>
              <div>
                <dt className="font-display italic text-xl text-noche mb-1">Acentos dorados</dt>
                <dd className="font-body text-base text-noche/75">
                  Bordados a mano y aplicaciones perladas como destellos de luz, no
                  como ornamento.
                </dd>
              </div>
              <div>
                <dt className="font-display italic text-xl text-noche mb-1">Corsetería suave</dt>
                <dd className="font-body text-base text-noche/75">
                  Estructura interna que sugiere contención sin restringir el cuerpo.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 6 — LISTA DE ESPERA
         ============================================================ */}
      <section id="lista-espera" className="py-section-lg bg-noche text-marfil">
        <div className="container-content max-w-3xl">
          <p className="font-ui text-xs tracking-widest uppercase text-petalo mb-6 text-center">
            Acceso anticipado
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight text-marfil text-center">
            Contemplación llega pronto.
          </h2>
          <p className="font-body text-lg text-petalo/90 mb-12 text-center max-w-xl mx-auto">
            Recibe el lookbook privado de la colección antes que nadie y accede a
            las primeras aperturas de cita.
          </p>

          <div className="bg-marfil text-noche p-8 md:p-12">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 7 — CTA FINAL
         ============================================================ */}
      <section className="py-section-lg">
        <div className="container-content text-center max-w-2xl">
          <p className="font-display italic text-2xl md:text-3xl text-noche/80 leading-snug mb-8">
            La belleza también puede ser un lugar de descanso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase border border-noche text-noche px-8 py-4 hover:bg-noche hover:text-marfil transition-all duration-medium ease-brand"
          >
            Solicitar cita privada
          </Link>
        </div>
      </section>
    </>
  );
}
