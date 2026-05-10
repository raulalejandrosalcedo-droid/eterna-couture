import type { Metadata } from 'next';
import PageStub from '@/components/PageStub';

export const metadata: Metadata = {
  title: 'Historia · Colombia × Barcelona',
  description:
    'La diseñadora, su trayectoria y el programa Manos Eternas. La riqueza textil de Colombia, la sofisticación de Barcelona.',
};

export default function HistoriaPage() {
  return (
    <PageStub
      eyebrow="Historia"
      title="Colombia × Barcelona. El alma que no tiene geografía."
      description="La biografía de Alejandra, los hitos de la marca (Colombiamoda 2018, Vivienne Westwood BBFW 2024), el manifiesto de Manos Eternas y la visión hacia 2028."
    />
  );
}
