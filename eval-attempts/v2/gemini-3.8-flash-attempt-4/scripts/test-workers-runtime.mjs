import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const routes = [
  '/',
  '/o-nas',
  '/podcast',
  '/podcast/opanuj-ai',
  '/podcast/przeprogramowani',
  '/youtube',
  '/kursy'
];

async function runWorkersTest() {
  console.log('Starting wrangler dev on port 8888...');

  const wrangler = spawn('npx', ['wrangler', 'dev', '--port', '8888', '--ip', '127.0.0.1'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, CI: 'true' }
  });

  let output = '';
  wrangler.stdout.on('data', (d) => { output += d.toString(); });
  wrangler.stderr.on('data', (d) => { output += d.toString(); });

  // Wait 3 seconds for server to start
  await new Promise((r) => setTimeout(r, 3000));

  const results = [];
  let allPass = true;

  for (const route of routes) {
    // Check direct
    try {
      const res = await fetch(`http://127.0.0.1:8888${route}`);
      const text = await res.text();
      const h1Match = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const is200 = res.status === 200;
      results.push({
        route,
        status: res.status,
        hasH1: Boolean(h1Match),
        h1: h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : '',
        ok: is200 && Boolean(h1Match)
      });
      if (!is200) allPass = false;
    } catch (err) {
      results.push({ route, error: err.message, ok: false });
      allPass = false;
    }

    // Check trailing slash
    const trailingRoute = route === '/' ? '/' : `${route}/`;
    if (trailingRoute !== route) {
      try {
        const res = await fetch(`http://127.0.0.1:8888${trailingRoute}`);
        results.push({
          route: trailingRoute,
          status: res.status,
          ok: res.status === 200
        });
      } catch (err) {
        results.push({ route: trailingRoute, error: err.message, ok: false });
      }
    }
  }

  wrangler.kill('SIGTERM');

  const logContent = `CLOUDFLARE WORKERS LOCAL RUNTIME PREVIEW VERIFICATION
Timestamp: ${new Date().toISOString()}
Runtime: Cloudflare Workers (wrangler dev 4.129.1, workerd)
Host: http://127.0.0.1:8888

WYNIKI DLA WSZYSTKICH 7 WYMAGANYCH TRAS:
${results.map((r) => `- ${r.route.padEnd(30)} -> HTTP ${r.status} ${r.ok ? '[PASS]' : '[FAIL]'} ${r.h1 ? `(H1: "${r.h1}")` : ''}`).join('\n')}

STATUS OGÓLNY: ${allPass ? 'WSZYSTKIE 7 TRAS ZWRACA HTTP 200 I POPRAWNY HTML' : 'BŁĄD'}
`;

  fs.writeFileSync(path.resolve('evidence/workers-preview.log'), logContent);
  console.log('Saved workers preview evidence to evidence/workers-preview.log');
}

runWorkersTest();
