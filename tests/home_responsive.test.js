// const timeout = 1000000;

// describe("Test Responsiveness of Homepage", () => {
//   test("Screenshot of all widths", async () => {
//     for (u in URL) {
//       await page.goto(URL[u], { waitUntil: "domcontentloaded" });
//       await page.evaluate(() => {
//         localStorage.setItem('isSubscribed', true);
//       });
//       for (w in WIDTH) {
//         await page.setViewport({ width: WIDTH[w], height: HEIGHT });
//         await page.screenshot({ path: `./screenshots/${u}/${w}.jpeg`, type: 'jpeg' });
//       }
//     }
//   }, timeout);
// });