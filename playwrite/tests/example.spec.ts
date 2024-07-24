import { test, expect } from "@playwright/test";
import { StartPage } from "../src/pages/startPage";
import { PageFactory } from "../src/pages/pageFactory";
test.describe("UI tests on start page", () => {
  let startPage:StartPage
  test.beforeAll(async({browser})=>{
    const page = await browser.newPage();
    startPage = PageFactory.getPage(page,"StartPage") as StartPage
    await startPage.viewPage()
  })
  test("Check title text", async () => {
    const titleText = await startPage.getTitleText();
    expect(titleText).toContain('Playwright')
    //await page.goto("https://playwright.dev/");
    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/Playwright/);
  });
 });