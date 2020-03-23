require('dotenv').config();
const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");

(async () => {
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  });
  const page = await browser.newPage();
  await page.emulate(devices["iPhone 7"]);
  await page.goto(
    "https://www.feversocial.com/promo/join?promoid=134364&scenes=pc&parent=https://feversocial.com/promo-28794-134364"
  );
  await page.waitForSelector("#e2e-login-button", {
    visible: true
  });
  await page.click("#e2e-login-button");
  await page.waitForSelector("#email_input_container", {
    visible: true
  });
  await page.evaluate(() => {
    document.querySelector("#email_input_container input").value = process.env.FBACCOUNT;
    document.querySelector("input[type='password']").value = process.env.FBPASSWORD;
    document.querySelector("button[name='login']").click();
  });
  await page.waitForSelector("button[name='__CONFIRM__']", {
    visible: true
  });
  await page.evaluate(() => {
    document.querySelector("button[name='__CONFIRM__']").click();
  });
  await page.waitForSelector("div[type='0']", {
    visible: true
  });
  await page.waitForFunction(`document.querySelectorAll('div[type="0"]')[1].textContent === '登出'`);

  await page.screenshot({ path: "example.png", fullPage: true });

  await browser.close();
})();
