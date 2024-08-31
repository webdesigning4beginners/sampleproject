const {  expect } = require("@playwright/test");
class rahulshettyAutomationpractise {
  constructor(page) {
    this.page = page;
    this.selectdropdown = this.page.locator("#dropdown-class-example");
  }

  async SelectdropdownValidation(option1, option2, option3, option4) {
    await this.selectdropdown.selectOption({index: option1});
    await this.selectdropdown.selectOption(Option1);
    await this.selectdropdown.selectOption({index: option3});
    await this.selectdropdown.selectOption({index: option4});

    await this.page.waitForTimeout(5000);
    await expect(this.selectdropdown).toBeVisible();
    
  }
  async waiting() {
    await this.page.waitForTimeout(5000);
    console.log('This is good');
    console.log('Testing');
  }
}

module.exports = {rahulshettyAutomationpractise};