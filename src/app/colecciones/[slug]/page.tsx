import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { collections } from '@/lib/site-config';
import PageStub from '@/components/PageStub';

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const col = collections.find((c) => c.slug === params.slug);
  if (!col) return {};
  return {
    title: `${col.name} · ${col.season}`,
    description: col.description,
  };
}

export default function CollectionPage({ params }: Params) {
  const col = collections.find((c) => c.slug === params.slug);
  if (!col) return notFound();

  // Contemplación tiene página propia
  if (params.slug === 'contemplacion') {
    redirect('/colecciones/contemplacion');
  }

  return (
    <PageStub
      eyebrow={`${col.season} · ${col.status}`}
      title={col.name}
      description={`${col.description} Próximamente: line-up completo de looks, fichas individuales por pieza, manifiesto extendido y materiales editoriales descargables.`}
    />
  );
}
