import type { MetadataRoute } from 'next';
import { siteConfig, collections, occasions } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    '', '/colecciones', '/custom-made', '/atelier',
    '/historia', '/prensa', '/universo', '/contacto',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const collectionRoutes = collections.map((c) => ({
    url: `${base}/colecciones/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: c.slug === 'contemplacion' ? 1 : 0.7,
  }));

  const occasionRoutes = occasions.map((o) => ({
    url: `${base}/custom-made/${o.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...collectionRoutes, ...occasionRoutes];
}
