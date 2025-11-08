import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unat.edu.pe';
  const currentDate = new Date().toISOString();

  // Rutas estáticas principales
  const routes = [
    '',
    '/admision',
    '/carreras',
    '/investigacion',
    '/autoridades',
    '/noticias',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Rutas de carreras
  const carreras = [
    'sistemas',
    'civil',
    'educacion',
    'contabilidad',
    'administracion',
  ].map((carrera) => ({
    url: `${baseUrl}/carreras/${carrera}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Rutas de portales externos (para referencia)
  const portales = [
    '/biblioteca',
    '/campus',
    '/eventos',
    '/alumni',
  ].map((portal) => ({
    url: `${baseUrl}${portal}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...carreras, ...portales];
}
