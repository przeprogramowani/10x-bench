import { spawn, execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const logsDir = path.resolve('verification-logs');
fs.mkdirSync(logsDir, { recursive: true });

function runCommand(cmd, logFile) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Executing: ${cmd}`);
  try {
    const output = execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
    const result = {
      command: cmd,
      timestamp,
      exitCode: 0,
      status: 'SUCCESS',
      output: output.trim(),
    };
    fs.writeFileSync(path.join(logsDir, logFile), JSON.stringify(result, null, 2));
    return result;
  } catch (err) {
    const result = {
      command: cmd,
      timestamp,
      exitCode: err.status ?? 1,
      status: 'FAILED',
      output: err.stdout?.toString() || '',
      error: err.stderr?.toString() || err.message,
    };
    fs.writeFileSync(path.join(logsDir, logFile), JSON.stringify(result, null, 2));
    return result;
  }
}

async function verifyWorkersRoutes() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Testing Workers Preview Routes on Port 8799...`);

  // Start wrangler dev in background
  const wrangler = spawn('npx', ['wrangler', 'dev', '--port', '8799'], {
    stdio: 'pipe',
  });

  let output = '';
  wrangler.stdout.on('data', (d) => output += d.toString());
  wrangler.stderr.on('data', (d) => output += d.toString());

  // Wait 4 seconds for wrangler to be ready
  await new Promise((r) => setTimeout(r, 4000));

  const routes = [
    '/',
    '/o-nas/',
    '/podcast/',
    '/podcast/opanuj-ai/',
    '/podcast/przeprogramowani/',
    '/youtube/',
    '/kursy/',
  ];

  const results = [];

  for (const r of routes) {
    try {
      const curlOut = execSync(`curl -sI -o /dev/null -w "%{http_code}" http://localhost:8799${r}`, {
        encoding: 'utf-8',
      }).trim();
      results.push({
        route: r,
        httpCode: parseInt(curlOut, 10),
        status: curlOut === '200' ? 'SUCCESS' : 'FAILED',
      });
    } catch (e) {
      results.push({
        route: r,
        httpCode: null,
        status: 'ERROR',
        error: e.message,
      });
    }
  }

  wrangler.kill();

  const summary = {
    timestamp,
    port: 8799,
    routesCount: routes.length,
    passingCount: results.filter((r) => r.httpCode === 200).length,
    results,
  };

  fs.writeFileSync(path.join(logsDir, 'workers-routes.json'), JSON.stringify(summary, null, 2));
  console.log(`Workers test finished: ${summary.passingCount}/${summary.routesCount} passing.`);
  return summary;
}

async function main() {
  console.log('Rozpoczynam pełne procedury weryfikacyjne...');

  // 1. Wersje zależności
  const depCheck = runCommand('npm list --depth=0', 'dependencies.json');

  // 2. TypeScript Typecheck
  const tsCheck = runCommand('npx tsc --noEmit', 'typecheck.json');

  // 3. Budowanie produkcyjne
  const buildCheck = runCommand('npx astro build', 'build.json');

  // 4. Audyt SEO i struktury stron
  const seoCheck = runCommand('node scripts/verify-pages.mjs', 'pages-audit.json');

  // 5. Testy odporności i symulacji awarii
  const resilienceCheck = runCommand('SIMULATE_SOURCE_FAILURE=opanuj-ai npx astro build', 'controlled-failure-build.json');

  // 6. Testy tras na żywo w Workers
  const workersCheck = await verifyWorkersRoutes();

  // Final rebuild to leave clean production dist
  runCommand('npx astro build', 'final-build.json');

  console.log('Zakończono zbieranie dowodów w verification-logs/.');
}

main().catch(console.error);
