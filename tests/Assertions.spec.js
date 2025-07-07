import {test, expect} from '@playwright/test'

test('Assertions', async ({page})=>{

    // open app url
    await page.goto('https://www.nopcommerce.com/en/register')

    //1) await expect(page).toHaveTitle()
    await expect(page).toHaveTitle('Register - nopCommerce')

    //2) await expect(locator).toBeVisible()
     const logoElement= await page.locator('.desktop-logo')
     await expect(logoElement).toBeVisible()

     //3) await expect(locator).toBeEnabled()
      const searchStoreBox = await page.locator('#small-searchterms')
      await expect(searchStoreBox).toBeEnabled()

    //4) expect(locator).toBeChecked()   Radio/checkbox is clicked
      const maleRadioButton= await page.locator('#gender-male')
      await maleRadioButton.click()       // select radio button
      await expect(maleRadioButton).toBeChecked()

    //check box
    const newsletterCheckbox= await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    //5) await expect(locator).toHaveAttribute()
    const regBtn = await page.locator('#register-button')
    await expect(regBtn).toHaveAttribute('type','submit')


})