const { test, expect } = require("@playwright/test");
const { chromium, webkit, firefox } = require("@playwright/test");
const {
  rahulshettyAutomationpractise,
} = require("../pageobjects/rahulshettyAutomationpractise");

let RahulshettyAutomationpractise, context, page, page2;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
});

test("Sample Test 1", async () => {

 
  page = await context.newPage();
  page2 = await context.newPage();

page.setDefaultNavigationTimeout(15000);

  RahulshettyAutomationpractise = new rahulshettyAutomationpractise(page);

  await RahulshettyAutomationpractise.waiting();

  await page.goto("https://www.google.co.in/");



  await page.waitForURL("https://www.google.co.in/");

  await page.waitForSelector("//textarea[@name='q']");

  await page.waitForEvent()

 await page2.goto("https://www.facebook.com");


await page.bringToFront();

await page.waitForTimeout(5000);

await page2.bringToFront();

await page.waitForTimeout(5000);
});

test("Sample Test 2", async () => {
  await page.goto("https://www.yahoo.co.in/");
await page.waitForLoadState('load');



await page.waitForSelector("[aria-label='Movies']");
await page.waitForSelector("#yschsp");
  
});

test.afterAll(async () => {
  await context.close();
});
