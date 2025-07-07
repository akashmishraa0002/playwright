import {test,expect} from '@playwright/test';

test(" Date Picker ", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const year = "2025";
    const month = "August";
    const date = "12";

    await page.click("#datepicker")   // opens calendar

    while (true) {
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()

        if (currentYear == year && currentMonth == month) {
            break;
        }

        await page.locator('[title="Next"]').click()
    }

    const dates = await page.$$("//a[@class='ui-state-default']")

    // date selection using loop

    // for(const dt of dates)
    // {
    //     if(await dt.textContent()==date){
    //         await dt.click()
    //         break;
    //     }
    // }


    // date selection without loop

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(3000)

})