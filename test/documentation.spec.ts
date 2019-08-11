import {container} from "./resource";
import {website} from "./resource/website";
import  puppet from "puppeteer";

jasmine.DEFAULT_TIMEOUT_INTERVAL=10000*60;

describe("Check Documentation",()=>{

    let web;
    let browser:puppet.Browser;

    beforeAll(async ()=>{
           web = await container.get(website);      
           browser = await puppet.launch({headless:true});
    })

    test("Load Document",async ()=>{
        let [page] = await browser.pages()
        await page.goto(web.url("/docs"));

        await page.waitForSelector("#content-container",{timeout:1000});

        await page.type("#search","example");

        let content = await page.$(".content .title")
        let string = content.toString()
        console.log(string);

    })
    
    afterAll(async ()=>{
        browser.close()
        web.child.kill()
    })

})