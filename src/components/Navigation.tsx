'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig, navigation } from '@/lib/site-config';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-medium ease-brand ${
        scrolled
          ? 'bg-[rgba(247,243,238,0.95)] backdrop-blur-sm border-b border-borde'
          : 'bg-transparent'
      }`}
    >
      <div className="container-content flex items-center justify-between h-20 md:h-24">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-wordmark text-xs md:text-sm text-noche tracking-widest hover:text-dorado transition-colors duration-medium"
          aria-label="Inicio · Alejandra Salcedo Couture"
        >
          Alejandra Salcedo
          <span className="hidden sm:inline"> · Couture</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Principal">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-ui text-sm font-light tracking-wide text-noche hover:text-dorado transition-colors duration-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="hidden md:inline-flex font-ui text-xs font-light tracking-widest uppercase border border-noche text-noche px-5 py-3 hover:bg-noche hover:text-marfil transition-all duration-medium ease-brand"
          >
            Cita privada
          </Link>
          <button
            type="button"
            className="lg:hidden p-2 text-noche"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <span className="sr-only">Menú</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="square" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-marfil flex flex-col">
          <div className="container-content flex items-center justify-between h-20">
            <span className="font-wordmark text-xs text-noche">
              Alejandra Salcedo · Couture
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 text-noche"
              aria-label="Cerrar menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="square" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8" aria-label="Mobile">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-3xl text-noche hover:text-dorado"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-borde">
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="block w-full text-center font-ui text-xs font-light tracking-widest uppercase bg-noche text-marfil py-4"
            >
              Solicitar cita privada
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
