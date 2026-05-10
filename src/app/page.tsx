import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, occasions, clientStories } from '@/lib/site-config';
import NewsletterForm from '@/components/NewsletterForm';

export default function HomePage() {
  return (
    <>
      {/* ============================================================
         BLOQUE 1 — HERO FULL-SCREEN
         ============================================================ */}
      <section className="relative h-screen min-h-[640px] w-full flex items-end overflow-hidden bg-noche">
        <Image
          src="/images/hero-contemplacion-portico.jpg"
          alt="Vestido couture champagne en el pórtico — Colección Contemplación"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-noche/70 via-noche/20 to-transparent" />

        <div className="relative container-content pb-20 md:pb-28 text-marfil">
          <p className="font-ui text-xs tracking-widest uppercase mb-6 opacity-90">
            Universo Eterna · {siteConfig.city}
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] max-w-3xl mb-10 tracking-tight">
            {siteConfig.tagline}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase bg-marfil text-noche px-8 py-4 hover:bg-dorado hover:text-marfil transition-all duration-medium ease-brand"
            >
              Solicitar cita privada
            </Link>
            <Link
              href="/colecciones"
              className="inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase border border-marfil text-marfil px-8 py-4 hover:bg-marfil hover:text-noche transition-all duration-medium ease-brand"
            >
              Ver colecciones
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-marfil/70 text-xs font-ui tracking-widest uppercase">
          <span aria-hidden="true">↓</span>
          <span className="sr-only">Desplazar hacia abajo</span>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 2 — AUTORIDAD INMEDIATA
         ============================================================ */}
      <section className="bg-marfil-soft py-section">
        <div className="container-content">
          <p className="font-ui text-xs tracking-widest uppercase text-tierra mb-3 text-center">
            Trayectoria reconocida
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12 max-w-3xl mx-auto leading-tight">
            Couture presentada en Vivienne Westwood Bridal Barcelona Fashion Week
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="font-display text-5xl text-noche mb-3">2024</p>
              <p className="font-ui text-sm tracking-wide text-tierra">
                Vivienne Westwood BBFW
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl text-noche mb-3">2018</p>
              <p className="font-ui text-sm tracking-wide text-tierra">
                Colombiamoda
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl text-noche mb-3">8 — 16</p>
              <p className="font-ui text-sm tracking-wide text-tierra">
                Semanas de confección por pieza
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 3 — COLECCIÓN DESTACADA: CONTEMPLACIÓN
         ============================================================ */}
      <section className="py-section-lg">
        <div className="container-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-4">
              Colección 2025/2026 · En lanzamiento
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
              Contemplación.
              <br />
              <em className="not-italic text-tierra">La calma hecha couture.</em>
            </h2>
            <p className="font-body text-lg text-noche/80 mb-4">
              Una colección inspirada en la calma, la luz y la sensación de descansar
              en una paz más grande que nosotras mismas.
            </p>
            <p className="font-body text-lg text-noche/80 mb-8">
              Sedas, organzas, tules suaves, tonos empolvados y acentos dorados dan
              forma a una feminidad serena, etérea y profundamente elegante.
            </p>
            <Link
              href="/colecciones/contemplacion"
              className="inline-flex items-center font-ui text-xs font-light tracking-widest uppercase border-b border-noche text-noche pb-2 hover:border-dorado hover:text-dorado transition-colors"
            >
              Descubrir la colección →
            </Link>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/look-jardin-champagne.jpg"
                alt="Vestido champagne en jardín — look de Contemplación"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden mt-12">
              <Image
                src="/images/look-tocado-floral.jpg"
                alt="Tocado floral dorado — pieza de Contemplación"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 4 — ATELIER / PROCESO
         ============================================================ */}
      <section className="bg-marfil-soft py-section-lg">
        <div className="container-content">
          <div className="max-w-2xl mb-16">
            <p className="font-ui text-xs tracking-widest uppercase text-tierra mb-4">
              El atelier
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
              Cinco etapas. Una pieza única.
            </h2>
            <p className="font-body text-lg text-noche/80">
              El tiempo de confección de cada pieza es parte de su valor. La mayoría
              de encargos requieren entre 8 y 16 semanas.
            </p>
          </div>

          <ol className="grid md:grid-cols-5 gap-8">
            {[
              ['01', 'Consulta', 'Conversación íntima sobre la ocasión, tu cuerpo y tu historia.'],
              ['02', 'Diseño', 'Bocetos, paletas y propuesta de pieza única.'],
              ['03', 'Pruebas', 'Moulage sobre maniquí. 2–3 sesiones de ajuste.'],
              ['04', 'Confección', 'Construcción artesanal: bordados, drapeados, acabados.'],
              ['05', 'Entrega', 'La pieza llega lista, registrada en archivo de marca.'],
            ].map(([num, title, desc]) => (
              <li key={num}>
                <span className="font-display italic text-2xl text-dorado block mb-3">{num}</span>
                <h3 className="font-display text-xl mb-3 text-noche">{title}</h3>
                <p className="font-body text-base text-noche/70 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 5 — PIEZAS POR OCASIÓN
         ============================================================ */}
      <section className="py-section-lg">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-ui text-xs tracking-widest uppercase text-tierra mb-4">
              Piezas por ocasión
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Cada momento merece su propio lenguaje.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion) => (
              <Link
                key={occasion.slug}
                href={`/custom-made/${occasion.slug}`}
                className="group block"
              >
                <div className="aspect-[3/4] relative overflow-hidden mb-4 bg-marfil-soft">
                  <Image
                    src={
                      occasion.slug === 'novia-civil'
                        ? '/images/look-jardin-beige.jpg'
                        : occasion.slug === 'invitada'
                        ? '/images/caso-invitada-azul.jpg'
                        : occasion.slug === 'madrina'
                        ? '/images/caso-madrina-rosa.jpg'
                        : '/images/editorial-negro-tul.jpg'
                    }
                    alt={occasion.label}
                    fill
                    className="object-cover transition-transform duration-slow ease-brand group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="font-display text-xl mb-2 text-noche group-hover:text-dorado transition-colors">
                  {occasion.label}
                </h3>
                <p className="font-body text-sm text-noche/70">{occasion.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 6 — CASOS DE CLIENTAS
         ============================================================ */}
      <section className="bg-marfil-soft py-section-lg">
        <div className="container-content">
          <div className="max-w-2xl mb-16">
            <p className="font-ui text-xs tracking-widest uppercase text-tierra mb-4">
              Mujeres Eterna
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Vestidas desde su propia historia.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientStories.map((story) => (
              <article key={story.slug} className="group">
                <div className="aspect-[4/5] relative overflow-hidden mb-6 bg-marfil">
                  <Image
                    src={story.image}
                    alt={`${story.name} — ${story.occasion}`}
                    fill
                    className="object-cover transition-transform duration-slow ease-brand group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <h3 className="font-display text-2xl mb-2 text-noche">{story.name}</h3>
                <p className="font-ui text-xs tracking-wide uppercase text-dorado mb-4">
                  {story.occasion}
                </p>
                <p className="font-body italic text-base text-noche/80 leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 7 — PROPÓSITO / MANOS ETERNAS
         ============================================================ */}
      <section className="py-section-lg">
        <div className="container-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image
              src="/images/atelier-encaje-tijeras.jpg"
              alt="Detalle de encaje sobre la mesa del atelier"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-4">
              Propósito · Manos Eternas
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
              Preservar el saber hacer transmitiéndolo.
            </h2>
            <p className="font-body text-lg text-noche/80 mb-4">
              Manos Eternas es nuestro programa de capacitación a mujeres en
              situaciones de vulnerabilidad para facilitar su reinserción laboral
              a través del oficio de la alta costura.
            </p>
            <p className="font-body italic text-lg text-tierra mb-8">
              Eternizar momentos, creando piezas que trascienden el ahora para
              vivir por siempre.
            </p>
            <Link
              href="/historia"
              className="inline-flex items-center font-ui text-xs font-light tracking-widest uppercase border-b border-noche text-noche pb-2 hover:border-dorado hover:text-dorado transition-colors"
            >
              Conocer la historia completa →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
         BLOQUE 8 — NEWSLETTER
         ============================================================ */}
      <section className="bg-noche py-section-lg text-marfil">
        <div className="container-content max-w-3xl">
          <p className="font-ui text-xs tracking-widest uppercase text-petalo mb-4">
            Lookbook privado
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight text-marfil">
            Recibe el lookbook de Contemplación antes que nadie.
          </h2>
          <p className="font-body text-lg text-petalo/90 mb-10">
            Acceso prioritario a las primeras aperturas de cita y al material
            editorial completo de la colección.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
