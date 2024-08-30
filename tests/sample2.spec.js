const { test, expect } = require("@playwright/test");
const { chromium, webkit, firefox } = require("@playwright/test");
const {
  rahulshettyAutomationpractise,
} = require("../pageobjects/rahulshettyAutomationpractise");

//jsonfile --> convert to string --> javascript object (we can use by variablename.property)
const dataset =JSON.parse(JSON.stringify(require('../data/dataset.json')));

let RahulshettyAutomationpractise, context, page, browser;
test.beforeAll(async () => {
    browser = await chromium.launch({headless: false, channel: 'chrome'});
    console.log('broser is about to launch')
  });
 
  
test.beforeEach(async () => {

    context = await browser.newContext();
    
  //context = await browser.newContext({recordVideo: {dir: 'videos/'}});
});

test("Sample Test 1", async () => {
  page = await context.newPage();

  RahulshettyAutomationpractise = new rahulshettyAutomationpractise(page);

  await RahulshettyAutomationpractise.waiting();

  await page.goto("https://www.google.co.in/");


  console.log(dataset.email);

  let a = [1,2,3];
  expect(a).toEqual(expect.arrayContaining([3,2]));
let b = {color: 'red', rank:1};

expect(b).toEqual(expect.objectContaining({rank:1}));


let c= "Meenu is a good boy"
expect(c).toEqual(expect.stringContaining("good"));

});

test("Sample Test 2", async () => {
    page = await context.newPage();

    RahulshettyAutomationpractise = new rahulshettyAutomationpractise(page);

  await page.goto("https://www.yahoo.co.in/");
});

test.afterEach(async () => {
  await context.close();
  console.log('context is closed');
});

test.afterAll(async () => {
    await browser.close();
   console.log('broser is closed');
  });
  