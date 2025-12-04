import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import log from "../utils/logger";
let page;
let dashboardPage;

export const test = base.extend({
  dashboardPage: async ({ browser }, use) => {

    if (!page) {
      const context = await browser.newContext();
      log.info("Lunching the browser..")
      page = await context.newPage();

      const loginPage = new LoginPage(page);
      await loginPage.loginIntoApplication();
    }
    if (!dashboardPage) {
      dashboardPage = new DashboardPage(page);
    }
    await use(dashboardPage);
  }
});

export const expect = base.expect;
