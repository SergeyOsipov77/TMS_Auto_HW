import { Builder, By, WebDriver, until } from "selenium-webdriver";
import { locatorsCss, locatorsXpath } from "../Locatots";
import { BASE_URL, TEACHER_URL, VK_URL } from "../../consts/consts";

describe("Тестирование сайта teachmeskills", () => {
    
let driver:WebDriver;

beforeAll(async () => {
    driver = new Builder().forBrowser("MicrosoftEdge").build();
    await driver.manage().window().maximize();
    await driver.get(BASE_URL);
}, 25000)

afterAll(async () => {
    await driver.quit();
}, 25000);  

it('Проверка раздела "С нами ты станешь айтишником и покоришь мир IT"', async () => { 
    const titleText = await driver.wait(until.elementLocated(By.xpath(locatorsXpath.title)),5000);
    expect(await titleText.isDisplayed()).toBe(true);
    expect(await titleText.getText()).toBe('С нами ты станешь айтишником и покоришь мир IT');  
  });

  it('Проверка наличия кнопки "Программирование"', async () => {
    const newsLink = await driver.findElement(By.xpath(locatorsXpath.newsLink));
    expect(await newsLink.isDisplayed()).toBe(true);
    expect(await newsLink.getText()).toContain('Программирование');
    expect(await newsLink.isEnabled()).toBe(true);
  }, 26000);

  it('Проверка кнопки "Преподаватели"', async () => {

    const showTeachers = await driver.findElement(By.xpath(locatorsXpath.teachers));
    expect(await showTeachers.isDisplayed()).toBe(true);
    expect(await showTeachers.getText()).toBe('Преподаватели');
    await showTeachers.click();
    await driver.wait(until.urlIs(TEACHER_URL), 5000);
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toContain(TEACHER_URL);
  });

  it('Проверка нажатия на выплывающий список и открытия разделов "Тестирование web & mobile apps"', async () => {

    const BurgerMenu = await driver.wait(until.elementIsEnabled(driver.findElement(By.css(locatorsCss.BurgerMenu))), 10000);
    await BurgerMenu.click();
    const allServices = await driver.findElement(By.xpath(locatorsXpath.Services));
    expect(await allServices.isDisplayed()).toBe(true);
    expect(await allServices.getText()).toBe('Тестирование web & mobile apps');
  });

  it.only('Проверка перехода на страницу платформы в "ВК"', async () => {
    const contacts = await driver.findElement(By.xpath(locatorsXpath.contacts));
    expect(await contacts.isDisplayed()).toBe(true);
    expect(await contacts.getText()).toBe('Контакты');
    await contacts.click();
    const VK = await driver.wait(until.elementIsEnabled(driver.findElement(By.xpath(locatorsXpath.vktwo))));
    await VK.click();
    await driver.wait(until.urlIs(VK_URL), 5000);
    await driver.switchTo().newWindow(VK_URL);
    const currentUrl = await driver.getCurrentUrl();
     expect(currentUrl).toContain(VK_URL);
  });//этот тест падает. Пробовал по двум локаторам vk и vktwo. Хз 


});