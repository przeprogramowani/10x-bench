const routes = [
  '/',
  '/o-nas',
  '/podcast',
  '/podcast/opanuj-ai',
  '/podcast/przeprogramowani',
  '/youtube',
  '/kursy'
];

async function checkRoutes(port = 8888) {
  console.log(`Checking 7 required routes on http://127.0.0.1:${port}...`);
  let allOk = true;

  for (const route of routes) {
    const url = `http://127.0.0.1:${port}${route}`;
    try {
      const res = await fetch(url);
      const html = await res.text();
      const hasH1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.test(html);
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : 'BRAK';
      const is200 = res.status === 200;

      console.log(`[${is200 ? 'PASS' : 'FAIL'}] ${route} -> Status ${res.status}, H1: ${hasH1}, Title: "${title}"`);
      if (!is200 || !hasH1) allOk = false;
    } catch (err) {
      console.error(`[ERROR] ${route} -> ${err.message}`);
      allOk = false;
    }
  }

  if (allOk) {
    console.log('\nAll 7 required routes return HTTP 200 and valid HTML with H1 headings!');
  } else {
    console.log('\nSome routes failed verification.');
    process.exit(1);
  }
}

const port = process.argv[2] ? parseInt(process.argv[2], 10) : 8888;
checkRoutes(port);
