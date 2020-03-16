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
    "https://www.feversocial.com/promo/join?promoid=134230&scenes=pc&test=LMI9VigaGiYb3xgi5FSJfeP09GzVsUTJNIPjOPkJA93X10diOiuaPBOIA4cefPjMQ2S3lIrugYHHd7h1cL1RrgV3Yuc+IofO8rQcr5Jp2Zs="
  );
  await page.waitForSelector("#e2e-login-button", {
    visible: true
  });
  await page.click("#e2e-login-button");
  await page.waitForSelector("#email_input_container", {
    visible: true
  });
  await page.evaluate(() => {
    document.querySelector("#email_input_container input").value =
      process.env.fbaccount;
    document.querySelector("input[type='password']").value = process.env.password;
    document.querySelector("button[name='login']").click();
  });
  await page.waitForSelector("button[name='__CONFIRM__']", {
    visible: true
  });
  await page.evaluate(() => {
    document.querySelector("button[name='__CONFIRM__']").click();
  });
  await page.waitForSelector("button", {
    visible: true
  });

  await page.screenshot({ path: "example.png", fullPage: true });

  await browser.close();
})();
