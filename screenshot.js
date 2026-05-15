const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await page.goto('file:///home/aaron/coding projects/RAsolutions/RA-Solutions/laundrylink.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: '/home/aaron/.gemini/antigravity/brain/3beffb3b-fdca-4ff7-a185-62bffd083c76/artifacts/mobile_top.png', fullPage: true });
  await browser.close();
})();
