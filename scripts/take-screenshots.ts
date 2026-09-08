/** Capture an evaluator-owned preview, never rebuild or modify the frozen candidate. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { createHash } from 'node:crypto';
export async function captureV2(root: string, id: string, preview: string, identityText: string) {
if (!id || !/^[a-z0-9][a-z0-9.-]*-attempt-[1-9]\d*$/.test(id) || !preview || !identityText) throw new Error('Usage: npm run screenshots -- <V2-attempt-id> <local-preview-url> <unique-visible-text>');
const url = new URL(preview);
if (!['127.0.0.1','localhost','[::1]'].includes(url.hostname)) throw new Error('Use the owned local evaluator preview');
const attempt = JSON.parse(fs.readFileSync(path.join(root,'eval-results/v2',id,'attempt.json'),'utf8'));
if (attempt.benchmarkVersion !== 'v2' || attempt.attemptId !== id || !/^[a-z0-9][a-z0-9.-]*$/.test(attempt.modelId) || !id.startsWith(`${attempt.modelId}-attempt-`)) throw new Error('Wrong attempt identity/version');
const out = path.join(root,'website/public/screenshots/v2');
fs.mkdirSync(out,{recursive:true});
const browser = await chromium.launch();
try {
  const page = await browser.newPage({viewport:{width:1280,height:720}});
  const response = await page.goto(url.href,{waitUntil:'networkidle'});
  if (response?.status() !== 200 || !(await page.locator('body').innerText()).includes(identityText)) throw new Error('Preview identity/status did not match this attempt');
  await page.screenshot({path:path.join(out,`${id}.png`),fullPage:false});
  const files = fs.readdirSync(out).filter(n => n.startsWith(`${attempt.modelId}-attempt-`) && n.endsWith('.png')).sort((a,b)=>a.localeCompare(b,'en',{numeric:true}));
  // Filmstrip input is only this V2 model's captured images; no candidate files are inspected.
  await page.setViewportSize({width:1280,height:720*files.length});
  await page.setContent(`<html><body style="margin:0">${files.map(n=>`<img style="display:block;width:1280px;height:720px" src="data:image/png;base64,${fs.readFileSync(path.join(out,n)).toString('base64')}">`).join('')}</body></html>`);
  await page.locator('img').evaluateAll(images => Promise.all(images.map(image => (image as HTMLImageElement).decode())));
  await page.screenshot({path:path.join(out,`${attempt.modelId}_filmstrip.png`),fullPage:true});
  const hashes = Object.fromEntries(fs.readdirSync(out).filter(n=>n.endsWith('.png')).sort().map(n=>[n,createHash('sha256').update(fs.readFileSync(path.join(out,n))).digest('hex').slice(0,12)]));
  fs.writeFileSync(path.join(root,'website/src/data/screenshot-hashes-v2.json'),JSON.stringify(hashes,null,2)+'\n');
  console.log(`Captured ${id} and V2-only filmstrip.`);
} finally { await browser.close(); }

}
if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [id, preview, identityText] = process.argv.slice(2);
  await captureV2(fileURLToPath(new URL('../', import.meta.url)), id, preview, identityText);
}
