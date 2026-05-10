import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: `${params.slug} · Pieza couture`,
    description: 'Ficha editorial de pieza única. Materiales, técnica, historia y solicitud de pieza similar.',
  };
}

export default function PiezaPage({ params }: Params) {
  return (
    <PageStub
      eyebrow="Pieza · Ficha editorial"
      title={params.slug.replace(/-/g, ' ')}
      description="Aquí vivirá la ficha editorial de cada pieza: galería de 8+ imágenes, nombre poético, materiales y origen, técnica de confección, horas invertidas, historia de la clienta (con permiso) y CTA para solicitar pieza similar. Implementación con Sanity CMS."
    />
  );
}
