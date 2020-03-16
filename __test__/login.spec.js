// beforeEach(async () => {
//   await page.goto(
//     "https://www.feversocial.com/promo/join?promoid=134230&scenes=pc&test=LMI9VigaGiYb3xgi5FSJfeP09GzVsUTJNIPjOPkJA93X10diOiuaPBOIA4cefPjMQ2S3lIrugYHHd7h1cL1RrgV3Yuc+IofO8rQcr5Jp2Zs="
//   );
// });

// describe("Login", () => {
//   it("Can login with correct id and pw", async done => {
//     await page.screenshot({ path: "./screenshot_entry.png" });

//     await page.waitForSelector("#e2e-login-button", {
//       visible: true
//     });
//     await page.click("#e2e-login-button");
//     await page.waitForSelector("#email_input_container", {
//       visible: true
//     });
//     await page.evaluate(() => {
//       document.querySelector("#email_input_container input").value =
//         "ianlinda1228@gmail.com";
//       document.querySelector("input[type='password']").value = "chu28150135";
//       document.querySelector("button[name='login']").click();
//     });
//     await page.waitForSelector("button[name='__CONFIRM__']", {
//       visible: true
//     });
//     await page.evaluate(() => {
//       document.querySelector("button[name='__CONFIRM__']").click();
//     });
//     await page.waitForSelector("button", {
//       visible: true
//     });

//     await page.screenshot({ path: "example.png", fullPage: true });

//     await browser.close();

//     /* get textConent */
//     // const textContent = await page.evaluate(() => {
//     //   const root = document.getElementById("root");
//     //   return root.textContent;
//     // });

//     // expect(textContent).toEqual("Welcome!");
//     done();
//   });
// });

describe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://google.com");
  });

  it('should be titled "Google"', async () => {
    await page.screenshot({ path: "./screenshot_fill_inputs.png" });

    await expect(page.title()).resolves.toMatch("Google");
  });
});
