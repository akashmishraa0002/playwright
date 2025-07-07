import {test,expect} from '@playwright/test';

test("Handle Frams", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //approach 1) using name & url

    // const frame = await page.frame('name');   // if name is present

    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill("[name='mytext1']", 'Hello')


    //approach 2) using frame locator

    const inputFrame = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
     await inputFrame.fill("Hello")

    await page.waitForTimeout(3000);

})