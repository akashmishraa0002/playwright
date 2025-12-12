import {test, expect} from "@playwright/test"

test("Check API Health", async function({request}){

    const start = Date.now()

    const response = await request.get("https://restful-booker.herokuapp.com/ping")

    const end = Date.now()

    const duration = start - end
    
    if(duration>2000)
    {
        throw new Error(`API response is too slow ${duration}`)
    } else {
        console.log(`Total duration of the response is ${duration}`);
    }

    const status = response.status()
    console.log(`Response code from API is ${status}`);
})