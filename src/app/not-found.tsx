import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="pt-32 pb-section-lg min-h-[80vh] flex items-center">
      <div className="container-content max-w-3xl text-center">
        <p className="font-display italic text-7xl text-dorado mb-6">404</p>
        <h1 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
          Esta pieza aún no existe en el archivo.
        </h1>
        <p className="font-body text-lg text-noche/70 mb-10 max-w-xl mx-auto">
          La página que buscas no se encuentra disponible. Puede que haya cambiado
          de lugar o aún no esté publicada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase bg-noche text-marfil px-8 py-4 hover:bg-dorado transition-all duration-medium ease-brand"
          >
            Volver al inicio
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
