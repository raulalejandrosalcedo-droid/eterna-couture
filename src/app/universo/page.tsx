import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Universo · Journal',
  description:
    'Inspiración, técnicas y atmósferas del universo Eterna. Manifiestos, procesos y reflexiones sobre la alta costura con propósito.',
};

export default function UniversoPage() {
  return (
    <PageStub
      eyebrow="Universo · Journal"
      title="Notas desde el atelier."
      description="Aquí publicaremos los manifiestos de cada colección, los procesos creativos detrás de cada pieza, las decisiones de materiales, las inspiraciones, y las guías para la mujer que busca vestir desde el propósito."
    />
  );
}
