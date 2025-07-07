import {test,expect} from '@playwright/test';

test('handle innerframe ' ,async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"}).locator("input[name='mytext3']")
    frame3.fill("Welcome")

    // await page.waitForTimeout(3000);

    //nested frames
    const childFrames = await frame3.childFrames()
    await childFrames[0].locator("//*[@id='15']/div[3]/div").check()

    await page.waitForTimeout(3000);

})