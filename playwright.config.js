const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  //retries: 1,
  reporter: [['html', { open: 'never' }],
             ['allure-playwright']
            ],
  use: {
    headless: true,
    // viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      args: ['--start-maximized'], // ✅ Fullscreen for Chromium/WebKit
    },
    viewport: null, // ✅ Important: Disable fixed viewport
  },
  projects: [
    { 
      name: 'chromium',
       use: {
         browserName: 'chromium',
        launchOptions: {
          args: ['--start-maximized'],
        }
        } },
        
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});