const { TestScheduler } = require("jest")

const timeout = 10000

describe('Testing Targets Page Elements', () => {
    test("Male Issues Div Test", async () => {
        await page.goto(URL.TARGETS, {waitUntil: "domcontentloaded"})
        await page.evaluate(() => {
            localStorage.setItem('isSubscribed', true);
        })
        const linkHandlers = await page.$x('//*[@id="app"]/nav/div[1]/ul/li[2]/a');

        if (linkHandlers.length > 0) {
            await linkHandlers[0].click();
        } else {
            throw new Error("Link not found");
        }
    }, timeout)
})