import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Cita privada · Atelier Barcelona',
  description:
    'Solicita tu cita privada en el atelier de Alejandra Salcedo Couture en Barcelona. Diseñamos cada pieza desde tu historia, tu cuerpo y tu ocasión.',
};

const faq = [
  {
    q: '¿Cuánto tiempo lleva confeccionar una pieza?',
    a: 'El tiempo de confección de cada pieza es parte de su valor. La mayoría de encargos requieren entre 8 y 16 semanas, dependiendo de la complejidad y disponibilidad de materiales.',
  },
  {
    q: '¿Cómo es la primera cita?',
    a: 'Una conversación íntima en nuestro atelier de Barcelona (o por videollamada para clientas internacionales). Hablamos de la ocasión, tu cuerpo, tu historia y la dirección estética. No hay compromiso económico hasta la propuesta de pieza.',
  },
  {
    q: '¿Trabajáis con clientas fuera de España?',
    a: 'Sí. Coordinamos pruebas en Barcelona o nos desplazamos para encargos significativos. Para clientas internacionales sugerimos al menos dos visitas presenciales.',
  },
  {
    q: '¿Hay rangos de precio orientativos?',
    a: 'Cada pieza se cotiza individualmente según materiales y complejidad. El ticket de entrada para una pieza couture a medida parte de 2.500€. La conversación de cita aclara esto desde el inicio.',
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero editorial */}
      <section className="pt-32 pb-section bg-marfil">
        <div className="container-content max-w-4xl">
          <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-6">
            Cita privada
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
            Cuéntanos el momento que quieres vestir.
          </h1>
          <p className="font-body text-lg md:text-xl text-noche/80 leading-relaxed max-w-2xl">
            Diseñaremos una pieza desde tu historia, tu cuerpo y tu ocasión. Cada
            solicitud es leída y respondida personalmente por Alejandra.
          </p>
        </div>
      </section>

      {/* Tres canales de contacto */}
      <section className="pb-section">
        <div className="container-content grid md:grid-cols-3 gap-6">
          <div className="bg-marfil-soft p-8">
            <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-3">
              Email
            </p>
            <h3 className="font-display text-xl mb-2">Escribir al atelier</h3>
            <p className="font-body text-base text-noche/70 mb-4">
              Para mensajes detallados o adjuntar referencias.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-ui text-sm text-noche border-b border-noche hover:text-dorado hover:border-dorado transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="bg-marfil-soft p-8">
            <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-3">
              Calendly
            </p>
            <h3 className="font-display text-xl mb-2">Agendar videoconsulta</h3>
            <p className="font-body text-base text-noche/70 mb-4">
              30 minutos. Briefing previo obligatorio.
            </p>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-sm text-noche border-b border-noche hover:text-dorado hover:border-dorado transition-colors"
            >
              Ver disponibilidad →
            </a>
          </div>

          <div className="bg-marfil-soft p-8">
            <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-3">
              WhatsApp
            </p>
            <h3 className="font-display text-xl mb-2">Conversación directa</h3>
            <p className="font-body text-base text-noche/70 mb-4">
              Para preguntas rápidas y coordinación de pruebas.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-sm text-noche border-b border-noche hover:text-dorado hover:border-dorado transition-colors"
            >
              Abrir WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Formulario integrado */}
      <section className="bg-marfil-soft py-section-lg">
        <div className="container-content max-w-4xl">
          <div className="mb-12">
            <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-4">
              Solicitud detallada
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Briefing del atelier.
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-lg">
        <div className="container-content max-w-3xl">
          <p className="font-ui text-xs tracking-widest uppercase text-tierra mb-6">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 leading-tight">
            Lo que solemos conversar al inicio.
          </h2>
          <dl className="space-y-10">
            {faq.map((item) => (
              <div key={item.q} className="border-t border-borde pt-6">
                <dt className="font-display text-xl md:text-2xl mb-3 text-noche">
                  {item.q}
                </dt>
                <dd className="font-body text-lg text-noche/75 leading-relaxed">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
