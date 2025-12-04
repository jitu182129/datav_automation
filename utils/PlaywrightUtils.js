class BasePage {

  constructor(page) { 
    this.page = page; 
}

async click(elementLocator){
  await this.page.click(elementLocator);
}
async fill(locator,value){
  await this.click(locator);
  await this.clearText(locator);
  await this.page.fill(locator,value);
}
async clearText(locator){
  await this.page.locator(locator).clear();
}
async goToURL(url){
  await this.page.goto(url);
}
async letsWaitFor(time){
  await this.page.waitForTimeout(time);
}
async waitForElement(elementLocator){
  await this.page.waitForSelector(elementLocator, { timeout: 20000 });
}
async verifyToastMessage(toastMessage){
  try{
    await this.page.waitForSelector(`//div[text()='${toastMessage}']`, { timeout: 15000 });
    console.log("Success message: ",toastMessage);
    return true;
  }catch(error){
    console.log("Unable to verify the toast message: ", error.message)
    return false;
  }
}
async pressKeyboardKey(key){
  await this.page.keyboard.press(key);
}
}

module.exports = BasePage;
