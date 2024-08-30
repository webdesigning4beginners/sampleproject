const { test, expect } = require("@playwright/test");
const { chromium, webkit, firefox } = require("@playwright/test");
const {
  rahulshettyAutomationpractise,
} = require("../pageobjects/rahulshettyAutomationpractise");

//jsonfile --> convert to string --> javascript object (we can use by variablename.property)
const dataset =JSON.parse(JSON.stringify(require('../data/dataset.json')));

let RahulshettyAutomationpractise, context, page, browser;

test.beforeEach(async () => {
test.setTimeout(35000);

  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  RahulshettyAutomationpractise = new rahulshettyAutomationpractise(page);
 

  
});

test("Sample Test 1", async () => {
  
  await RahulshettyAutomationpractise.waiting();

  await page.goto("https://www.google.co.in/");

  console.log(dataset.email);
});

test("Sample Test 2", async () => {
    page = await context.newPage();

    RahulshettyAutomationpractise = new rahulshettyAutomationpractise(page);

  await page.goto("https://www.yahoo.co.in/");
});

test.afterEach(async () => {
  await context.close();
});
