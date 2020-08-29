const { TestScheduler } = require("jest")

const timeout = 10000

describe('Testing Targets Page Elements', () => {
    test("Male Issues Div Test", async () => {
        await page.goto(URL.TARGETS, {waitUntil: "domcontentloaded"})
        await page.evaluate(() => {
            localStorage.setItem('isSubscribed', true);
        })

        
    }, timeout)
})