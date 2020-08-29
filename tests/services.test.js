jest.setTimeout(30000)

beforeAll(async () => {
  await page.goto(URL.SERVICES, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    localStorage.setItem('modalShown', false);
    localStorage.setItem('isSubscribed', true);
    localStorage.setItem('isFirstVisit', false);
  });
})

describe("Test Service Pages", () => {
  test('Test If Pages Exist', async () => {
    let exist = await page.evaluate(async () => {

      return await new Promise(async resolve => {
        const delay = (time) => {
          return new Promise(function (resolve) {
            setTimeout(resolve, time)
          });
        }
        let elements = document.querySelectorAll('#app>div.mt-5.container>div:not(:first-child)');
        test = true
        for (let element of elements) {
          element.click();
          await delay(200)
          let body = document.querySelector('#app>div.container>div>div')
          test = test && !!body
          await delay(200)
        }
        resolve(test)
      })
    });
    expect(exist).toBe(true)
  })
});


const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}