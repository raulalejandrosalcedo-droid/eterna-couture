import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { collections } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Colecciones',
  description:
    'Archivo de colecciones de Alejandra Salcedo Couture: Contemplación, ESTER, ETERNA y Renacer de Ensueño.',
};

export default function ColeccionesPage() {
  return (
    <>
      {/* Hero editorial */}
      <section className="pt-32 pb-section bg-marfil">
        <div className="container-content max-w-4xl">
          <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-6">
            Archivo de colecciones
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
            Cada colección es un tiempo congelado.
          </h1>
          <p className="font-body text-lg md:text-xl text-noche/80 leading-relaxed max-w-2xl">
            Desde Renacer de Ensueño en 2021 hasta Contemplación en lanzamiento, el
            archivo de Alejandra Salcedo Couture documenta una sensibilidad estética
            que evoluciona sin perder su voz.
          </p>
        </div>
      </section>

      {/* Grid editorial */}
      <section className="pb-section-lg">
        <div className="container-content space-y-12 md:space-y-20">
          {collections.map((c, i) => (
            <article
              key={c.slug}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Link
                href={c.status === 'En lanzamiento' ? `/colecciones/${c.slug}` : `/colecciones/${c.slug}`}
                className="block group"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-marfil-soft">
                  <Image
                    src={c.cover}
                    alt={`Portada de ${c.name}`}
                    fill
                    className="object-cover transition-transform duration-slow ease-brand group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </Link>
              <div>
                <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-4">
                  {c.season} · {c.status}
                </p>
                <h2 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
                  {c.name}
                </h2>
                <p className="font-display italic text-xl text-tierra mb-6">{c.claim}</p>
                <p className="font-body text-lg text-noche/80 mb-8 leading-relaxed">
                  {c.description}
                </p>
                <Link
                  href={`/colecciones/${c.slug}`}
                  className="inline-flex items-center font-ui text-xs font-light tracking-widest uppercase border-b border-noche text-noche pb-2 hover:border-dorado hover:text-dorado transition-colors"
                >
                  Ver colección →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
