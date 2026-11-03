const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const dir = __dirname;
const mode = process.argv[2] || 'preview';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(dir, 'reel.html'));
  await page.evaluate(() => window.ready);
  await page.waitForTimeout(300);
  if (mode === 'preview') {
    const times = [0.9, 3.0, 5.2, 6.4, 8.5, 10.9, 12.4, 13.6, 15.2, 17.5, 19.9, 22.0, 23.8, 25.2, 27.6, 29.5];
    fs.mkdirSync(path.join(dir, 'preview'), { recursive: true });
    for (const t of times) {
      await page.evaluate(([t]) => window.render(t), [t]);
      await page.screenshot({ path: path.join(dir, 'preview', `t${t.toFixed(1)}.jpg`), type: 'jpeg', quality: 80 });
    }
  } else {
    const fps = 30, dur = 31.2, n = Math.round(fps * dur);
    fs.mkdirSync(path.join(dir, 'frames'), { recursive: true });
    for (let i = 0; i < n; i++) {
      await page.evaluate(([t, f]) => window.render(t, f), [i / fps, i]);
      await page.screenshot({ path: path.join(dir, 'frames', `f${String(i).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 93 });
    }
  }
  await browser.close();
})();
