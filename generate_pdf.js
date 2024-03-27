const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless : true,
    });
    const page = await browser.newPage();
    await page.setContent(`
         ${fs.readFileSync('slip.html', 'utf8')}
    `);
    await page.pdf({ path: 'slip_gaji.pdf', format: 'A4' });

    await browser.close();
})();


