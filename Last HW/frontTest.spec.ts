import { Builder, By, until, WebDriver } from "selenium-webdriver"
describe("Frontend tests",()=>{
    let driver:WebDriver
    beforeAll(async()=>{ 
     driver = await new Builder().forBrowser("chrome").build()
     await driver.manage().window().maximize();
     
    })
    afterAll(async()=>{
        await driver.quit();
    })
    it("Open browser",async()=>{
    
        await driver.get("https://google.com");
        let element =  await driver.findElement(By.xpath("//div[@class='FPdoLc lJ9FBc']//input[contains(@value,'Google Search')]"))
        expect(element.isDisplayed()).toBeTruthy()
    })
})