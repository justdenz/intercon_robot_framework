// const { TestScheduler } = require("jest")

// const timeout = 10000

// describe('Testing Targets Page Elements', () => {
//     test("Male Issues Div Test", async () => {
//         await page.goto(URL.TARGETS, {waitUntil: "domcontentloaded"})
//         await page.evaluate(() => {
//             localStorage.setItem('isSubscribed', true);
//         })
//         const elements = await page.$x('//*[@id="app"]/nav/div[1]/ul/li[2]/a')
//         await elements[0].click() 
//     }, timeout)
// })