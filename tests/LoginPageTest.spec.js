const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
import log from "../utils/logger";

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  log.info("Logging into application...")
  await loginPage.loginIntoApplication();
  log.info("Successfully logged into application")

  // expect(await dashboardPage.isDashboardVisible('Dashboard')).toBeTruthy();
});