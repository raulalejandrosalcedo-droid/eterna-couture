/**
 * Configuración global del sitio — Alejandra Salcedo Couture / Universo Eterna
 * Editar aquí para propagar cambios a layout, SEO y footer.
 */

export const siteConfig = {
  name: 'Alejandra Salcedo Couture',
  shortName: 'ASC',
  universe: 'Universo Eterna',
  tagline: 'Alta costura con alma, creada en Barcelona para momentos que merecen permanecer.',
  description:
    'Alta costura con propósito en Barcelona. Vestidos que eternizan momentos únicos, creados con moulage artesanal y tejidos nobles.',
  url: 'https://alejandrasalcedo.com',
  email: 'hola@alejandrasalcedo.com',
  emailLegacy: 'alejandrasalcedodigital@gmail.com',
  city: 'Barcelona',
  ogImage: '/images/hero-contemplacion-portico.jpg',
  social: {
    instagramBrand: 'https://instagram.com/alejandrasalcedocouture',
    instagramPersonal: 'https://instagram.com/alejandrasalcedo_',
    pinterest: 'https://pinterest.com/eternacouture',
    tiktok: 'https://tiktok.com/@alejandrasalcedocouture',
  },
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000',
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    'https://calendly.com/alejandrasalcedocouture/cita-privada',
};

export const navigation = {
  main: [
    { label: 'Colecciones', href: '/colecciones' },
    { label: 'Piezas a medida', href: '/custom-made' },
    { label: 'Atelier', href: '/atelier' },
    { label: 'Historia', href: '/historia' },
    { label: 'Prensa', href: '/prensa' },
    { label: 'Universo', href: '/universo' },
  ],
  footer: {
    atelier: [
      { label: 'El proceso', href: '/atelier' },
      { label: 'Custom Made', href: '/custom-made' },
      { label: 'Solicitar cita', href: '/contacto' },
    ],
    colecciones: [
      { label: 'Contemplación', href: '/colecciones/contemplacion' },
      { label: 'ESTER', href: '/colecciones/ester' },
      { label: 'ETERNA', href: '/colecciones/eterna' },
      { label: 'Archivo', href: '/colecciones' },
    ],
    servicio: [
      { label: 'Contacto', href: '/contacto' },
      { label: 'Prensa', href: '/prensa' },
      { label: 'Universo (journal)', href: '/universo' },
      { label: 'Historia', href: '/historia' },
    ],
  },
};

export const collections = [
  {
    slug: 'contemplacion',
    name: 'Contemplación',
    season: '2025/2026',
    status: 'En lanzamiento',
    statusColor: 'amber',
    claim: 'La calma hecha couture.',
    cover: '/images/hero-contemplacion-portico.jpg',
    description:
      'Una colección inspirada en la calma, la luz y la sensación de descansar en una paz más grande que nosotras mismas.',
  },
  {
    slug: 'ester',
    name: 'ESTER',
    season: 'S/S 2025',
    status: 'Activa',
    statusColor: 'green',
    claim: 'Fuerza y dignidad son su vestidura.',
    cover: '/images/editorial-negro-tul.jpg',
    description:
      'Inspirada en la valiente reina Ester, símbolo de dignidad, fuerza y propósito divino.',
  },
  {
    slug: 'eterna',
    name: 'ETERNA',
    season: '2024',
    status: 'Archivo',
    statusColor: 'green',
    claim: 'Lo eterno habita en los detalles.',
    cover: '/images/look-jardin-jarron.jpg',
    description:
      'Colección inaugural. La intersección entre espiritualidad cristiana, artesanía de autor y empoderamiento femenino.',
  },
  {
    slug: 'renacer-de-ensueno',
    name: 'Renacer de Ensueño',
    season: '2021',
    status: 'Archivo',
    statusColor: 'blue',
    claim: 'El primer aliento del universo Eterna.',
    cover: '/images/editorial-naturaleza.jpg',
    description: 'Archivo histórico de la marca.',
  },
];

export const occasions = [
  { label: 'Novia civil', slug: 'novia-civil', description: 'Couture para ceremonias íntimas y no tradicionales.' },
  { label: 'Invitada de boda', slug: 'invitada', description: 'Vestidos editoriales para invitadas que quieren presencia sin exceso.' },
  { label: 'Madrina', slug: 'madrina', description: 'Vestidos sobrios y elegantes con el peso ceremonial que merecen.' },
  { label: 'Gala y editorial', slug: 'gala', description: 'Piezas únicas para premieres, galas y sesiones editoriales.' },
];

export const clientStories = [
  {
    name: 'Karen',
    occasion: 'Madrina de ceremonia religiosa',
    quote:
      'Quería honrar la tradición de mi familia. Alejandra creó una pieza que era yo y mi historia al mismo tiempo.',
    image: '/images/caso-madrina-rosa.jpg',
    slug: 'karen-madrina',
  },
  {
    name: 'Paula Leticia',
    occasion: 'Vestido de cumpleaños · Tul, plumas, Swarovski',
    quote: 'No era un vestido. Era una manera de habitar mi propia luz esa noche.',
    image: '/images/caso-invitada-encaje.jpg',
    slug: 'paula-cumpleanos',
  },
  {
    name: 'Mayerlin',
    occasion: 'Vestido de invitada · Sant Pau, Barcelona',
    quote: 'Me sentí elegante sin esfuerzo. La pieza me acompañó todo el día como una segunda piel.',
    image: '/images/caso-invitada-azul.jpg',
    slug: 'mayerlin-invitada',
  },
];
