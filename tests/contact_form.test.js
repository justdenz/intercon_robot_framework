// jest.setTimeout(30000)

// beforeAll(async () => {
//   await page.goto(URL.CONTACT, { waitUntil: "networkidle0" });
//   await page.evaluate(() => {
//     localStorage.setItem('modalShown', false);
//     localStorage.setItem('isSubscribed', true);
//     localStorage.setItem('isFirstVisit', false);
//   });
// })

// emptyInput1 = {
//     name: '',
//     email: 'test@example',
//     subject: 'Inquiry',
//     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a enim sit amet sapien elementum fringilla vel at odio. Morbi.'
// }

// describe("Test Contact Form", () => {
//   test("Empty Inputs", async()=>{
//     await page.type('input[name=name]', emptyInput1.name);
//     await page.type('inpput[name=email]', emptyInput1.email);
//     await page.select('select[name=subject]', emptyInput1.subject)
//     await page.type('input[name=message]', emptyInput1.message)
    
//     await page.evaluate('form-selector', form => form.submit());
    
//     await page.waitForNavigation();
    
//     console.log('New Page URL:', page.url());
//     await page.waitForResponse(response=>response.status() === 400)
//     const p = await page.$('p.errorMsg')
//     expect(p).not.toBe(null)
//   })
// });

// const delay = (time) => {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, time)
//   });
// }