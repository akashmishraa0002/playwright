import { test, expect } from '@playwright/test';

test("hidden drop down", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.fill("[name='username']",'Admin')
    await page.fill("[name='password']",'admin123')
    await page.click("[type='submit']")

    await page.locator("//span[normalize-space()='PIM']").click()

    //click on drop down
    await page.locator("#oxd-icon bi-caret-down-fill oxd-select-text--arrow")

    //waiting for options
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options){

        const jobTitle=await option.textContent();
        // console.log(jobTitle);
        if(jobTitle.includes("QA Engineer"))
        {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(3000);

})