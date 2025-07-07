import { test, expect } from "@playwright/test"

test( 'Keyboard Actions ', async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    await page.type('[name="text1"]', "Welcome Akash");

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.keyboard.press('Tab')
    // await page.keyboard.up('Tab')

    await page.keyboard.press("Control+V")

    await page.waitForTimeout(3000)

})