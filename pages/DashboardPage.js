const BasePage = require('../utils/PlaywrightUtils');
import * as Helper from "../utils/Helper"
const { readJSON } = require('../utils/jsonReader');

let dashboardData = readJSON('data/dashboard.json');

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.page=page;

    this.dashboardName=dashboardData.dashboardName+Helper.randomNumberGenerator();

    this.createDashboardButton="//button[text()='Dashboard']";
    this.dashboardNameField="//input[@name='name']";
    this.dashboardDescriptionField="//input[@name='description']";
    this.saveButton="//button[text()='Save']";
    this.deleteButton="//button[text()='Delete']";
  }

   getDashboardDeleteButton(dashboardName){
    return `//*[text()='${dashboardName}']/..//button[@title='Delete']`;
  }
  async createDashboard() {
    await this.click(this.createDashboardButton);
    await this.fill(this.dashboardNameField,this.dashboardName);
    await this.fill(this.dashboardDescriptionField,dashboardData.dashboardDescription);
    await this.click(this.saveButton)
    return this.verifyToastMessage(dashboardData.success_toast_message_for_create_dashboard);
  }
  async deleteDashboard(){
    await this.pressKeyboardKey("Escape");
    await this.letsWaitFor(3000);
    await this.click(this.getDashboardDeleteButton(this.dashboardName));
    await this.click(this.deleteButton);
    return this.verifyToastMessage(dashboardData.success_toast_message_for_delete_dashboard);
  }
  async isDashboardVisible() { 
    try{
      await this.page.waitForSelector(`//*[text()='${this.dashboardName}']`, { timeout: 15000, state: 'visible' });
      return true;
    }catch(error){
      console.log("Unable to find the dashboard: ",error.message);
      return false;
    }
   }
}

module.exports = DashboardPage;