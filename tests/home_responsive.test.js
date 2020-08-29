const timeout = 10000;

beforeAll(async () => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => {
    localStorage.setItem('isSubscribed', true);
  });
});

describe("Test Responsiveness of Homepage", () => {

  test("Screenshot of all widths", async () => {
    for(w in WIDTH){
      await page.setViewport({ width: WIDTH[w], height: HEIGHT });
      await page.screenshot({ path: `./screenshots/home/${w}.jpeg`, type: 'jpeg' });
    }
  }, timeout);
});