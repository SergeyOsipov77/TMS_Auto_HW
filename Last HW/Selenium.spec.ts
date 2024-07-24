import { Builder, By, until, WebDriver } from "selenium-webdriver";


describe("Frontend tests",()=>{

    let driver:WebDriver
    

    beforeAll(async()=>{ 
     driver = await new Builder().forBrowser("chrome").build()
     await driver.manage().window().maximize();
     await driver.get("https://google.com");
    })
    afterAll(async()=>{
        await driver.quit();
    })
    it("Open browser",async()=>{
    
        let element =  await driver.findElement(By.xpath("//div[@class='FPdoLc lJ9FBc']//input[contains(@value,'Поиск в Google')]"));
        await element.click();
        //await driver.wait(until.elementIsVisible(element), 10000);
        expect(element.isDisplayed()).toBeTruthy()
    })
})