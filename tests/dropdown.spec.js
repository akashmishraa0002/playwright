import { test, expect } from '@playwright/test';


test("Drp Down", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Multiple ways to select option from dropdown
    // await page.locator("#country").selectOption({label:'India'})  label/visible text
    // await page.locator("#country").selectOption('India')  //visible text
    // await page.locator("#country").selectOption({value:'India'})  // by using value
    // await page.locator("#country").selectOption({index:1})  // by using index
    // await page.selectOption("#country",'india')     // by text

    

    //Assertions
    //1) check no. of options in dropdown  - approach 1
    // const options = await page.locator("#country option")
    //   await expect(options).toHaveCount(10)

    //2) check no. of options in dropdown  - approach 2
    //   const options = await page.$$("#country option")
    //   await expect(options.length).toBe(10)


    // Multi select drop down
    // await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])

    //check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Red')).toBeTruthy();


    await page.waitForTimeout(4000);

})