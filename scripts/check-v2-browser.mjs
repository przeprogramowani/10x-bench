import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const origin=process.argv[2]??'http://127.0.0.1:4178';
const browser=await chromium.launch();
const evidence=[];
try{
 for(const width of [390,768,1440]){
  const page=await browser.newPage({viewport:{width,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const route of ['/','/benchmark','/v1','/v1/benchmark','/kit']){
   const response=await page.goto(origin+route,{waitUntil:'networkidle'});assert.equal(response.status(),200);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${route} overflows at ${width}`);
   if(route==='/'){
    assert.equal(await page.getByRole('heading',{name:'No V2 results yet',exact:true}).count(),1);
    assert.equal(await page.getByText('Only latest models',{exact:true}).count(),0);
    assert.equal(await page.getByRole('heading',{name:'Model Family Rankings',exact:true}).count(),0);
    assert.equal(await page.locator('astro-island').count(),0);
   }
   if(route==='/benchmark'){
    assert.equal(await page.locator('h1').count(),1);
    assert.match(await page.locator('body').innerText(),/Nie publikuj strony/);
    assert.match(await page.locator('body').innerText(),/60 minut/);
   }
   if(route==='/v1')assert.match(await page.locator('body').innerText(),/122 evaluated attempts/);
   if(width<1024){await page.getByRole('button',{name:'Toggle menu'}).click();assert.equal(await page.locator('#mobile-menu').isVisible(),true);await page.locator('#mobile-menu').getByRole('link',{name:'V1 Archive',exact:true}).click();assert.match(new URL(page.url()).pathname,/^\/v1\/?$/);await page.goto(origin+route,{waitUntil:'networkidle'});}
   if(route==='/'||route==='/benchmark'){await page.evaluate(()=>scrollTo(0,0));const screenshot=`/tmp/10x-v2-${route==='/'?'home':'methodology'}-${width}.png`;await page.screenshot({path:screenshot});evidence.push({route,width,screenshot});}
  }
  assert.deepEqual(errors,[]);await page.close();
 }
 const api=await fetch(origin+'/api/v2/leaderboard.json').then(r=>r.json());assert.equal(api.benchmarkVersion,'v2');assert.equal(api.totalAttempts,0);assert.equal(api.totalModels,0);assert.deepEqual(api.leaderboard,[]);
 const old=JSON.parse(fs.readFileSync(new URL('../archive/v1/leaderboard.json',import.meta.url),'utf8'));assert.deepEqual(await fetch(origin+'/api/leaderboard.json').then(r=>r.json()),old);
 console.log(JSON.stringify({routesChecked:5,widths:[390,768,1440],emptyV2:true,legacyApiExact:true,evidence},null,2));
}finally{await browser.close();}
