import {test, expect} from '@playwright/test'

test('handle inputbox', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Input first name

    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();

    //fill details

    await page.fill('#name','Akash');

    //check radio

    await page.check('#male');
    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();

    await expect(await page.locator('#female').isChecked()).toBeFalsy();


    //check checkboxes

    // await page.locator('#monday').check();

    // expect (await page.locator('#monday')).toBeChecked();
    // expect (await page.locator('#monday').isChecked()).toBeTruthy();
    // expect (await page.locator('#tuesday').isChecked()).toBeFalsy();

    await page.waitForTimeout(3000);  //pausing code

    //multiple checkboxes

    const checkboxLocators=['#monday','#tuesday','#saturday'];

    for(const locator of checkboxLocators){
        await page.locator(locator).check();
    }

     await page.waitForTimeout(5000);
    

    for(const locator of checkboxLocators){
        if(await page.locator(locator).isChecked())
        {
        await page.locator(locator).uncheck();
        }
    }

     await page.waitForTimeout(3000);

})