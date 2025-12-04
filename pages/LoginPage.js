const BasePage = require('../utils/PlaywrightUtils');
const envConfig = require('../utils/envConfig');
import log from "../utils/logger";

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page=page;
    this.emailInput = "//input[@type='email']";
    this.passwordInput = "//input[@type='password']";
    this.loginButton = "//button[text()='Login']";
    this.dashboardText="//h3[text()='Dashboards']";
  }
  
  async loginIntoApplication(){
    log.info("Logging into application...")
    await this.goToURL(envConfig.baseURL);
    await this.fill(this.emailInput,envConfig.credentials.email);
    await this.fill(this.passwordInput,envConfig.credentials.password);
    await this.click(this.loginButton);
    await this.waitForElement(this.dashboardText);
    log.info("Successfully logged into application.");
  }
}

module.exports = LoginPage;