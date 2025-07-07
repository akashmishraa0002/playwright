import { test, expect } from '@playwright/test';

test("Table", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator('#productTable')

    // total no. of rows & colums

    const colums = await table.locator("thead tr th")
    console.log('colums are: ' , await colums.count());
    
    expect (await colums.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('rows are ', await rows.count());

    expect (await rows.count()).toBe(5)

    // const matchedrow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: ('Product 4')
    // });

    // await matchedrow.locator("[type:'checkbox']").check()


    // 2) select multiple product by reusable function

    // await selectProduct(rows, page, 'Product 1')
    // await selectProduct(rows, page, 'Product 3')
    // await selectProduct(rows, page, 'Product 5')


    // 3) print all products details using for loop

    // for (let i = 0; i < await rows.count(); i++) {
    //     const row = rows.nth(i);
    //     const tds = row.locator("td")

    //     for(let j=0; j< await tds.count()-1; j++){
    //        console.log(await tds.nth(j).textContent());
    //     }
        
    // }



    // 4) read all the data from the pagination table

    const pages = await page.locator(".pagination li a")
    console.log('no. of pages ', await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator("td")

        for(let j=0; j< await tds.count()-1; j++){
           console.log(await tds.nth(j).textContent());
        }
        
    }
     await page.waitForTimeout(3000);
    }

    async function selectProduct(rows, page, name) 
    {
        const matchedrow = rows.filter({
        has: page.locator('td'),
        hasText: ('Product 4')
    });

    await matchedrow.locator("input").check()      
    }

    await page.waitForTimeout(3000);

})