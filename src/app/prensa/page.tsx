import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Prensa · Credenciales y press kit',
  description:
    'Vivienne Westwood Bridal Barcelona Fashion Week 2024, Colombiamoda 2018, menciones en medios y press kit descargable.',
};

export default function PrensaPage() {
  return (
    <PageStub
      eyebrow="Prensa"
      title="La marca en los medios."
      description="Vivienne Westwood BBFW 2024, Colombiamoda 2018, prensa internacional y national. Próximamente: archivo descargable, fotografía editorial en alta resolución y biografía oficial para uso editorial."
    />
  );
}
