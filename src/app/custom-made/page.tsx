import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { occasions } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Piezas a medida · Custom Made',
  description:
    'Vestidos couture a medida en Barcelona. Encargos para novias civiles, invitadas de boda, madrinas y eventos editoriales.',
};

const imageMap: Record<string, string> = {
  'novia-civil': '/images/look-jardin-beige.jpg',
  invitada: '/images/caso-invitada-azul.jpg',
  madrina: '/images/caso-madrina-rosa.jpg',
  gala: '/images/editorial-negro-tul.jpg',
};

export default function CustomMadePage() {
  return (
    <>
      <section className="pt-32 pb-section bg-marfil">
        <div className="container-content max-w-4xl">
          <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-6">
            Piezas a medida
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
            Una pieza diseñada desde tu historia.
          </h1>
          <p className="font-body text-lg md:text-xl text-noche/80 leading-relaxed max-w-2xl">
            Cada encargo recorre el proceso completo del atelier: consulta, diseño,
            moulage sobre maniquí, pruebas y entrega. Plazos típicos: 8 a 16 semanas.
          </p>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container-content grid sm:grid-cols-2 gap-8">
          {occasions.map((o) => (
            <Link key={o.slug} href={`/custom-made/${o.slug}`} className="group block">
              <div className="aspect-[4/5] relative overflow-hidden bg-marfil-soft mb-6">
                <Image
                  src={imageMap[o.slug] || '/images/look-jardin-jarron.jpg'}
                  alt={o.label}
                  fill
                  className="object-cover transition-transform duration-slow ease-brand group-hover:scale-[1.02]"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-3 text-noche group-hover:text-dorado transition-colors">
                {o.label}
              </h2>
              <p className="font-body text-base text-noche/70 leading-relaxed">
                {o.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
