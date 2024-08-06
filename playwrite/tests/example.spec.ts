import { test, expect } from '@playwright/test';
import context from '@playwright/test';
import { BASE_URL_SELENIUM, BLOG_URL, SUCCESSFUL_STORIES_URL, TEACHER_URL, VK_URL } from './consts/consts';
import { locatorsCss, locatorsXpath } from './Locators/Locators';


test.describe('Тестирование сайта teachmeskills', () => {

  let page: any;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(BASE_URL_SELENIUM);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Проверка раздела "С нами ты станешь айтишником и покоришь мир IT"', async () => {
    const titleText = await page.waitForSelector(locatorsXpath.title, { timeout: 5000 });
    expect(await titleText.isVisible()).toBe(true);
    expect(await titleText.textContent()).toBe('С нами ты станешь айтишником и покоришь мир IT');
  });

  test('Проверка записи на курс', async () => {
    const insertPhone = await page.locator(locatorsXpath.phoneNumber);
    expect(await insertPhone.isVisible()).toBe(true);
    await insertPhone.click();
    await insertPhone.type('00000000');
    const reservation = await page.locator(locatorsXpath.reservation);
    await reservation.click();
    const visibleValidation = await page.locator(locatorsXpath.validation);
    expect(await visibleValidation.textContent()).toBe('Номер телефона короткий, исправьте его пожалуйста');
  });


  test('Проверка наличия кнопки "Программирование"', async () => {
    const newsLink = await page.locator(locatorsXpath.newsLink);
    expect(await newsLink.isVisible()).toBe(true);
    expect(await newsLink.textContent()).toContain('Программирование');
    expect(await newsLink.isEnabled()).toBe(true);
  });

  test('Проверка кнопки "Все успешные истории наших выпускников"', async () => {
    const showStory = await page.locator(locatorsXpath.story);
    expect(await showStory.isVisible()).toBe(true);
    await showStory.click();
    await page.waitForURL(SUCCESSFUL_STORIES_URL, { timeout: 5000 });
    const currentUrl = page.url();
    expect(currentUrl).toContain(SUCCESSFUL_STORIES_URL);
  });

  test('Проверка кнопки "Преподаватели"', async () => {
    const showTeachers = await page.locator(locatorsXpath.teachers);
    expect(await showTeachers.isVisible()).toBe(true);
    expect(await showTeachers.textContent()).toBe('Преподаватели');
    await showTeachers.click();
    await page.waitForURL(TEACHER_URL, { timeout: 5000 });
    const currentUrl = page.url();
    expect(currentUrl).toContain(TEACHER_URL);
  });

  test('Проверка кнопки "Блог"', async () => {
    const showBlog = await page.locator(locatorsXpath.blog);
    expect(await showBlog.isVisible()).toBe(true);
    expect(await showBlog.textContent()).toBe('Блог');
    await showBlog.click();
    await page.waitForURL(BLOG_URL, { timeout: 5000 });
    const currentUrl = page.url();
    expect(currentUrl).toContain(BLOG_URL);
  });

  test('Проверка нажатия на выплывающий список и открытия разделов "Тестирование web & mobile apps"', async () => {
    await page.click(locatorsCss.BurgerMenu);
    const allServices = await page.locator(locatorsXpath.Services);
    expect(await allServices.isVisible()).toBe(true);
    expect(await allServices.textContent()).toBe('Тестирование web & mobile apps');
  });

//   test('Проверка перехода на страницу платформы в "ВК"', async () => {
//     const contacts = await page.locator(locatorsXpath.contacts);
//     expect(await contacts.isVisible()).toBe(true);
//     expect(await contacts.textContent()).toBe('Контакты');
//     await contacts.click();
//     const VK = await page.locator(locatorsXpath.vktwo);
//     await VK.click();
//     //const page2 = await context.new_page();  //данный тест не работает, тк фрейм не распознает метод context.new_page(), хотя он описан в документации
//     await page2.waitForURL(VK_URL, { timeout: 5000 });
//     const currentUrl = page2.url();
//     expect(currentUrl).toContain(VK_URL);
//   });


});