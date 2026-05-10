import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'El atelier · Proceso de creación',
  description:
    'El proceso completo de creación: consulta, diseño, pruebas, confección y entrega. Atelier de alta costura en Barcelona.',
};

export default function AtelierPage() {
  return (
    <PageStub
      eyebrow="El atelier"
      title="Cinco etapas. Una pieza única."
      description="Desde la consulta inicial hasta la entrega final, cada pieza recorre un proceso de 8 a 16 semanas. Aquí documentaremos cada etapa: moulage, pruebas, bordados, decisiones de tejido, y la conversación constante con la clienta."
    />
  );
}
