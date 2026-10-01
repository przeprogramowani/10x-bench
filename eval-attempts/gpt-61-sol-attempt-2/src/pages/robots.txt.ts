export function GET() { return new Response('User-agent: *\nAllow: /\nSitemap: https://przeprogramowani.pl/sitemap.xml\n', { headers: { 'Content-Type': 'text/plain' } }); }
