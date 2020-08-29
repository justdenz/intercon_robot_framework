jest.setTimeout(30000)

beforeAll(async () => {
  await page.goto(URL.HOME, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => {
    localStorage.setItem('modalShown', false);
    localStorage.setItem('isSubscribed', true);
    localStorage.setItem('isFirstVisit', false);
  });
})

describe("Test Meta Tags", () => {
  test("Meta tag: title", async () => {
    expect(await page.title()).toBe('Intercon Regenerative Center')
  })

  test.each(['description', 'viewport', 'keywords', 'og:title', 'og:site_name', 'og:description', 'og:image'])("Meta tag: %s", async m => {
    let meta = await page.$eval(`head > meta[name='${m}']`, element => element.content);
    expect(meta).not.toBe(null)
  })

});

const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}