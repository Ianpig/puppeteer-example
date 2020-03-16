const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  });
  const page = await browser.newPage();
  await page.emulate(devices["iPhone 7"]);
  await page.goto("https://www.zines.cc/form/zines/13");
  await page.waitForSelector("input[name='876']", {
    visible: true
  });
  await page.waitFor(3000);

  await page.evaluate(() => {
    document.querySelector("input[name='876']").value = "asdasdasdasdasdas";
  });
  await page.click("button[type='submit']");
  await page.waitForSelector(".section-title", {
    visible: true
  });

  await page.screenshot({ path: "example.png", fullPage: true });

  await browser.close();
})();
