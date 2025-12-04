
import { test, expect } from '../fixtures/BaseTest'
import log from "../utils/logger";

test.describe.serial("Dashboard Tests", () => {

  test("Create Dashboard", async ({ dashboardPage }) => {
    log.info("Creating the dashboard...")
    expect.soft(
      await dashboardPage.createDashboard(),
      "Dashboard creation failed!"
    ).toBeTruthy();

    expect.soft(
      await dashboardPage.isDashboardVisible(),
      "Dashboard is not visible in the list!"
    ).toBeTruthy();
    log.info("Successfully created the dashboard and verified.")
  });

  test("Delete Dashboard", async ({ dashboardPage }) => {
    log.info("Deleting Dashboard...")
    expect.soft(
      await dashboardPage.deleteDashboard(),
      "Dashboard deletion failed!"
    ).toBeTruthy();
    log.info("Dashboard successfully deleted and verified by toast message.")
  });

});







// let page;
// let loginPage;
// let dashboardPage;

// test.describe.serial("Dashboard Page Test",()=>{

//   test.beforeAll(async ({browser})=>{
//     const context = await browser.newContext();
//     page = await context.newPage();
//     loginPage=new LoginPage(page);
//     dashboardPage=new DashboardPage(page);
//     await loginPage.loginIntoApplication();
//   })

//   test("Verify Create Dashboard",async()=>{
//     expect(await dashboardPage.createDashboard()).toBeTruthy();
//     expect(await dashboardPage.isDashboardVisible()).toBeTruthy();
//   })
//   test("Verify Delete Dashboard",async()=>{
//     expect(await dashboardPage.deleteDashboard()).toBeTruthy();
//   })
// })





// test(`Create dashboard: ${dashboardData.dashboardName}`, async ({ page }) => {
//   const dashboardPage = new DashboardPage(page);
//   const loginPage=new LoginPage(page);

//   await loginPage.loginIntoApplication();
//   expect(await dashboardPage.createDashboard()).toBeTruthy();
//   expect(await dashboardPage.isDashboardVisible()).toBeTruthy();
//   // expect(await dashboardPage.deleteDashboard()).toBeTruthy();
// })
// test("Verify Delete Dashboard",async()=>{
//    expect(await dashboardPage.deleteDashboard()).toBeTruthy();
// })