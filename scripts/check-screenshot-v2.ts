import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import { captureV2 } from './take-screenshots';
const root=fs.mkdtempSync(path.join(os.tmpdir(),'10x-screenshot-fixture-'));
try {
 const dir=path.join(root,'eval-results/v2/synthetic-attempt-1');fs.mkdirSync(dir,{recursive:true});fs.mkdirSync(path.join(root,'website/src/data'),{recursive:true});
 fs.writeFileSync(path.join(dir,'attempt.json'),JSON.stringify({benchmarkVersion:'v2',attemptId:'synthetic-attempt-1',modelId:'synthetic'}));
 await captureV2(root,'synthetic-attempt-1','http://127.0.0.1:4178/','10xBench V2');
 assert.ok(fs.existsSync(path.join(root,'website/public/screenshots/v2/synthetic-attempt-1.png')));
 assert.ok(fs.existsSync(path.join(root,'website/public/screenshots/v2/synthetic_filmstrip.png')));
 assert.ok(!fs.existsSync(path.join(root,'website/src/data/screenshot-hashes.json')));
 const hashes=JSON.parse(fs.readFileSync(path.join(root,'website/src/data/screenshot-hashes-v2.json'),'utf8'));assert.equal(Object.keys(hashes).length,2);
 await assert.rejects(captureV2(root,'synthetic-attempt-1','http://127.0.0.1:4178/','not-a-real-identity-marker'),/identity/);
 console.log('Synthetic V2 screenshot/filmstrip capture, identity rejection and V1 path isolation passed. No result fixture was added to the repository.');
}finally{fs.rmSync(root,{recursive:true,force:true});}
