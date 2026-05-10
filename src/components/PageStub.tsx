import Link from 'next/link';

interface PageStubProps {
  eyebrow: string;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function PageStub({
  eyebrow,
  title,
  description,
  comingSoon = true,
}: PageStubProps) {
  return (
    <section className="pt-32 pb-section-lg min-h-[80vh] flex items-center">
      <div className="container-content max-w-3xl">
        <p className="font-ui text-xs tracking-widest uppercase text-dorado mb-6">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
          {title}
        </h1>
        <p className="font-body text-lg md:text-xl text-noche/80 leading-relaxed mb-12 max-w-2xl">
          {description}
        </p>
        {comingSoon && (
          <p className="font-display italic text-xl text-tierra mb-8">
            Esta sección llegará pronto, con el ritmo del atelier.
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase bg-noche text-marfil px-8 py-4 hover:bg-dorado hover:text-marfil transition-all duration-medium ease-brand"
          >
            Solicitar cita privada
          </Link>
          <Link
            href="/colecciones/contemplacion"
            className="inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase border border-noche text-noche px-8 py-4 hover:bg-noche hover:text-marfil transition-all duration-medium ease-brand"
          >
            Ver Contemplación
          </Link>
        </div>
      </div>
    </section>
  );
}
