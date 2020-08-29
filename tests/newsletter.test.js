jest.setTimeout(30000)

beforeAll(async () => {
  await page.goto(URL.HOME, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    localStorage.setItem('modalShown', false);
    localStorage.setItem('isSubscribed', true);
    localStorage.setItem('isFirstVisit', false);
  });
})

describe("Test Newsletter", () => {
  test.each(['asd', '', 'helloworld', 'name@example'])("Invalid email: %s", async()=>{
    await page.type('input[name=email]', 'asd')
    const [button] = await page.$x("//button[contains(text(), 'Join')]");
    await button.click()
    await delay(1000)
    const p = await page.$('p.errorMsg')
    expect(p).not.toBe(null)
  })
});

const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}