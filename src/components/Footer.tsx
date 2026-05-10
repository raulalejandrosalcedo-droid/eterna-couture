import Link from 'next/link';
import { siteConfig, navigation } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="bg-noche text-marfil mt-section-lg">
      <div className="container-content py-section">
        {/* Manifesto */}
        <div className="max-w-2xl mb-16">
          <p className="font-display italic text-xl md:text-2xl leading-relaxed text-marfil">
            &ldquo;Cada mujer tiene una historia única que contar y un propósito divino que cumplir.&rdquo;
          </p>
          <p className="font-ui text-xs tracking-widest uppercase mt-4 text-petalo">
            — {siteConfig.name}
          </p>
        </div>

        {/* Columnas de navegación */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="font-ui text-xs tracking-widest uppercase text-petalo mb-5">
              Atelier
            </h4>
            <ul className="space-y-3">
              {navigation.footer.atelier.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base text-marfil hover:text-dorado transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-widest uppercase text-petalo mb-5">
              Colecciones
            </h4>
            <ul className="space-y-3">
              {navigation.footer.colecciones.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base text-marfil hover:text-dorado transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-widest uppercase text-petalo mb-5">
              Servicio
            </h4>
            <ul className="space-y-3">
              {navigation.footer.servicio.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base text-marfil hover:text-dorado transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-widest uppercase text-petalo mb-5">
              Universo
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.social.instagramBrand}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-marfil hover:text-dorado transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-marfil hover:text-dorado transition-colors"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-marfil hover:text-dorado transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-base text-marfil hover:text-dorado transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria + créditos */}
        <div className="pt-8 border-t border-petalo/30 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="font-ui text-xs tracking-wide text-petalo">
            © {new Date().getFullYear()} {siteConfig.name}. Atelier en {siteConfig.city}.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/aviso-legal" className="font-ui text-xs tracking-wide text-petalo hover:text-dorado">
              Aviso legal
            </Link>
            <Link href="/legal/privacidad" className="font-ui text-xs tracking-wide text-petalo hover:text-dorado">
              Privacidad
            </Link>
            <Link href="/legal/cookies" className="font-ui text-xs tracking-wide text-petalo hover:text-dorado">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
