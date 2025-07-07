import { test, expect } from '@playwright/test';

test( 'Handle Autosuggestion Drop Down', async ({page})=>{

    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const fromCityOption = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of fromCityOption){

        const value = await option.textContent()
        // console.log(value);

        if(value.includes('Karol Bagh'))
        {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(3000);
    

})