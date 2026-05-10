import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta primaria (del Brandbook)
        lino: '#B7B4A2',
        tierra: '#808274',
        rosa: '#C79A96',
        noche: '#42373A',
        petalo: '#DFC1B8',
        // Paleta extendida
        marfil: '#F7F3EE',
        'marfil-soft': '#F0EBE4',
        dorado: '#B7A060',
        negro: '#1A1614',
        gris: '#9E9890',
        alerta: '#8B4A42',
        borde: '#E8E0D5',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Garamond', 'serif'],
        body: ['var(--font-body)', 'Garamond', 'serif'],
        ui: ['var(--font-ui)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala modular ratio 1.25 (Major Third)
        xs: ['0.64rem', { lineHeight: '1.5' }],
        sm: ['0.80rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.75' }],
        lg: ['1.25rem', { lineHeight: '1.7' }],
        xl: ['1.563rem', { lineHeight: '1.5' }],
        '2xl': ['1.953rem', { lineHeight: '1.4' }],
        '3xl': ['2.441rem', { lineHeight: '1.3' }],
        '4xl': ['3.052rem', { lineHeight: '1.2' }],
        '5xl': ['3.815rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        tight: '-0.01em',
        normal: '0',
        wide: '0.08em',
        wider: '0.15em',
        widest: '0.25em',
      },
      maxWidth: {
        content: '1200px',
        prose: '70ch',
      },
      spacing: {
        section: '80px',
        'section-lg': '120px',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        slow: '800ms',
        medium: '500ms',
        fast: '300ms',
      },
    },
  },
  plugins: [],
};

export default config;
