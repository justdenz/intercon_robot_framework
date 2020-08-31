jest.setTimeout(30000)

beforeAll(async () => {
  await page.goto(URL.HOME, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    localStorage.setItem('modalShown', false);
    localStorage.setItem('isSubscribed', true);
    localStorage.setItem('isFirstVisit', false);
  });
})

describe("Test Home Target Modal", () => {
    test('Test if the Immune Support Target at Home Page Has modal and redirects to targets page', async () => {
        let exist = await page.evaluate(async () => {
            return await new Promise(async resolve => {
                const delay = (time) => {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, time)
                    });
                }
                let element = document.querySelector('#app > div:nth-child(6) > div > div:nth-child(3) > a > div > div')
                test = true
                element.click()
                await delay(500)
                let body = document.querySelector('#modal-scrollable___BV_modal_body_')
                test = test && !!body
                await delay(500)
                resolve(test)
            })
        })
        let newUrl = await page.url()
        exist = exist && !!(newUrl.indexOf('targets') > 0)
        expect(exist).toBe(true)
    })
    
});
  
  
const delay = (time) => {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}