import { test, expect } from '@playwright/test';

test("Alert", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("I am an alert box")
        await dialog.accept();
    })

    await page.click('//button[normalize-space()="Alert"]');
    await page.waitForTimeout(3000);

})