import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { sessionCost } from './calculate-cost';
import { stableReleaseAtStart } from './dependency-baseline';
test('later stable major and prereleases do not change an earlier attempt baseline',()=>{
 const pkg={versions:{'7.3.1':{},'8.0.0-beta.1':{},'8.0.0':{}},time:{'7.3.1':'2026-09-01T00:00:00Z','8.0.0-beta.1':'2026-09-02T00:00:00Z','8.0.0':'2026-09-08T00:00:00Z'}};
 assert.equal(stableReleaseAtStart(pkg,'2026-09-07T00:00:00Z').major,7);
 assert.equal(stableReleaseAtStart(pkg,'2026-09-09T00:00:00Z').major,8);
});
test('cost uses exact candidate sessions and canonical directory, excluding later manual sessions',()=>{
 const dir=fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(),'10x-cost-fixture-')));
 const db=new DatabaseSync(':memory:');
 try {db.exec('CREATE TABLE session (id TEXT, directory TEXT, cost REAL)');const insert=db.prepare('INSERT INTO session VALUES (?,?,?)');insert.run('candidate',dir,2);insert.run('later-manual',dir,99);insert.run('different-directory',os.tmpdir(),55);
 assert.deepEqual(sessionCost(db,{sessions:['candidate']},dir),{usd:2,sessionIds:['candidate']});
 assert.throws(()=>sessionCost(db,{sessions:['different-directory']},dir),/mismatched/);
 assert.throws(()=>sessionCost(db,{sessions:['missing']},dir),/mismatched/);
 }finally{db.close();fs.rmSync(dir,{recursive:true,force:true});}
});
