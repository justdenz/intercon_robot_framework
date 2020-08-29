jest.setTimeout(30000)

beforeAll(async () => {
  await page.goto(URL.TARGETS, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    localStorage.setItem('modalShown', false);
    localStorage.setItem('isSubscribed', true);
    localStorage.setItem('isFirstVisit', false);
  });
})

describe("Test Targets Pages", () => {
  test('Test If Modals Exist', async () => {
    const exist = await page.evaluate(async () => {
      return await new Promise(async resolve => {
        const delay = (time) => {
          return new Promise(function (resolve) {
            setTimeout(resolve, time)
          });
        }
        let elements = document.querySelectorAll('#app>div.main-container>div>div');
        let test = true
        for (let element of elements) {
          element.click();
          await delay(200)
          test = test && !!document.querySelector('#modal-scrollable___BV_modal_body_')
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