import {chromium,webkit,test}from '@playwright/test'

test('Redbus browser', async ({page})=>
{
    const edgebrowser=await chromium.launch({channel:'msedge',headless:false})
    const edgecontext=await edgebrowser.newContext();
  const edgenew=await edgecontext.newPage();
await edgenew.goto('https://www.redbus.in')
const redbustitle=await edgenew.title();
const redbusurl=await edgenew.url();
console.log("Redbustitle" + redbustitle);
console.log("Redbusurl:"+redbusurl);

})

test ("Flipcart browser", async({page})=>
{
const browser1=await webkit.launch({headless:false})
const kitcontext=await browser1.newContext();
const webnew=await kitcontext.newPage();
await webnew.goto('https://www.flipkart.com');
const webtitle=await webnew.url();
console.log("Flipcart link"+webtitle)

})