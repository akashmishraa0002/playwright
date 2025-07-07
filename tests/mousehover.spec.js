import {test, expect } from '@playwright/test'

test('Mouse Hover', async ({page}) =>{

    await page.goto("https://demo.opencart.com/")

    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const mackbook = await page.locator("//a[normalize-space()='Mac (1)']")

    //mouse hover

    await desktop.hover()
    await mackbook.hover()

    await page.waitForTimeout(3000);

})