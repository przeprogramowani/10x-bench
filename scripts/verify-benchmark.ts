import fs from 'node:fs';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const bundle = new URL('../benchmark/v2/', import.meta.url);
const manifest = JSON.parse(fs.readFileSync(new URL('manifest.json', bundle), 'utf8'));
const sha = (input: string | Buffer) => createHash('sha256').update(input).digest('hex');
for (const [name, hash] of Object.entries(manifest.files)) assert.equal(sha(fs.readFileSync(new URL(name, bundle))), hash, name);
assert.equal(manifest.revision, `sha256:${sha(JSON.stringify(manifest.files))}`);
const rubric = JSON.parse(fs.readFileSync(new URL('criteria.json', bundle), 'utf8'));
const prompt = fs.readFileSync(new URL('prompt.md', bundle), 'utf8');
const ids = new Set();
for (const category of rubric.categories) {
  assert.equal(category.max, category.checks.reduce((n: number, c: any) => n + c.max, 0));
  for (const section of category.promptSections) assert.ok(prompt.includes(`## ${section} —`), section);
  for (const check of category.checks) { assert.ok(!ids.has(check.id), check.id); ids.add(check.id); }
}
assert.equal(rubric.categories.reduce((n: number, c: any) => n + c.max, 0), 100);
console.log(`V2 bundle integrity, ${ids.size} unique checks, 100 points and prompt section mapping verified.`);
