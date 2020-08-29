
jest.setTimeout(30000)

describe("Test Hero Buttons", () => {

  test("Learn More", async () => {
    await page.goto(URL.HOME, { waitUntil: "networkidle0" });
    await page.evaluate(() => {
      localStorage.setItem('modalShown', false);
      localStorage.setItem('isSubscribed', true);
      localStorage.setItem('isFirstVisit', false);
    });
    const [button] = await page.$x("//button[contains(text(), 'Learn More')]");
    await button.click()
    await delay(4000)
    console.log(await page.url())
  })

  test("Watch Button", async () => {
    await page.goto(URL.HOME, { waitUntil: "networkidle0" });
    await page.evaluate(() => {
      localStorage.setItem('modalShown', false);
      localStorage.setItem('isSubscribed', true);
      localStorage.setItem('isFirstVisit', false);
    });
    const [button] = await page.$x("//button[contains(text(), 'Watch')]");
    await button.click()
    await delay(4000)
    const iframe = await page.$('iframe')
    expect(iframe).not.toBe(null)
  }, 100000);

});

const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}