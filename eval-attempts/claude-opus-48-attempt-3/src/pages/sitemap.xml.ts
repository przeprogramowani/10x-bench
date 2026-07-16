import type { APIRoute } from 'astro';
import { site } from '../data/site';

const routes = ['/', '/o-nas', '/podcast', '/youtube'];

export const GET: APIRoute = () => {
  const urls = routes
    .map((path) => {
      const loc = new URL(path, site.url).href;
      const priority = path === '/' ? '1.0' : '0.8';
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
