import {test, expect } from '@playwright/test'

test("Home Page Test", async ({page})=>{

    await page.goto('https://demoblaze.com/')

    //Login

    await page.locator("#login2").click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

    await page.waitForTimeout(5000)

    //Home Page
    const products = await page.$$('.hrefch')
    // expect(products).toHaveLength(9)

    //Logout
    await page.locator('#logout2').click()

})

// test('Product Add to Cart', async ({page})=>{

// await page.goto('https://demoblaze.com/')

//     //Login

//     await page.locator("#login2").click()
//     await page.locator('#loginusername').fill('pavanol')
//     await page.locator('#loginpassword').fill('test@123')
//     await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()
    
//     //Add to cart

//     await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
//     await page.locator('//a[normalize-space()="Add to cart"]').click()

 
//     page.on('dialog', async dialog=>{
  
//         expect(dialog.message()).toContain("Product added.")
//         await dialog.accept()

//     })
    
//     //Logout
//     await page.locator('#logout2').click()

// })