import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const routes = ['/', '/o-nas', '/kursy', '/podcast', '/youtube'];
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
