import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { occasions } from '@/lib/site-config';
import PageStub from '@/components/PageStub';

interface Params {
  params: { ocasion: string };
}

export async function generateStaticParams() {
  return occasions.map((o) => ({ ocasion: o.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const occ = occasions.find((o) => o.slug === params.ocasion);
  if (!occ) return {};
  return {
    title: `${occ.label} · Vestidos a medida`,
    description: occ.description,
  };
}

export default function CustomMadeDetailPage({ params }: Params) {
  const occ = occasions.find((o) => o.slug === params.ocasion);
  if (!occ) return notFound();

  return (
    <PageStub
      eyebrow={`Custom Made · ${occ.label}`}
      title={occ.label}
      description={`${occ.description} Próximamente: galería de casos reales, materiales recomendados, plazos típicos y formularios específicos para esta ocasión.`}
    />
  );
}
