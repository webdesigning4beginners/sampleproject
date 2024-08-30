// @ts-check
const { test, expect } = require("@playwright/test");
const { chromium, webkit, firefox } = require("@playwright/test");
const {
  rahulshettyAutomationpractise,
} = require("../pageobjects/rahulshettyAutomationpractise");

let RahulshettyAutomationpractise;

test.beforeEach(async ({ page }) => {
  RahulshettyAutomationpractise = new rahulshettyAutomationpractise(page);

  await page.goto("AutomationPractice/", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(5000);

  console.log(await page.content());
  
});

test("Selectdropdown", async () => {
  await RahulshettyAutomationpractise.SelectdropdownValidation(0, 1, 2, 3);
});
