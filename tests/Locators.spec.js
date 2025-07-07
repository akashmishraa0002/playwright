import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto("https://demoblaze.com/");

    // click on login btn property
    // await page.locator('id=login2').click()

    await page.click('id=login2')

    // provide username - css
    await page.fill('#loginusername', 'pavalol')
    // await page.type('#loginusername')

    //provide pass
    await page.fill('#loginpassword', 'test@123')

    //click on login btn
    await page.click("//button[normalize-space()='Log in']")

    // verify logout link presence
    const logoutlink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutlink).toBeVisible();

    await page.close()

})