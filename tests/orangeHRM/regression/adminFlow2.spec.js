import { test } from '../../../fixtures/fixtures.js';
import { LoginPage } from '../pages/LoginPage.js';
import { AdminPage } from '../pages/AdminPage.js';
import env from '../../../config/env.config.js';
import { readJson } from '../../../utils/jsonUtils.js';

const data = readJson();

test.describe('Regression - Admin', () => {
  /** @type {LoginPage} */
  let loginPage;
  /** @type {AdminPage} */
  let admin;

  // Runs before each test — gets the test-scoped `page` fixture
  test.beforeEach(async ({ page, logger, envConfig }) => {
    // instantiate POMs with the same page that will be used in the test
    loginPage = new LoginPage(page, logger);
    admin = new AdminPage(page, logger);

    // ensure we are at the base page and logged in for each test
    await page.goto(envConfig.baseURL);
    await loginPage.login(
      data.username || envConfig.username,
      data.password || envConfig.password
    );
  });

  test('open user management add user modal', async ({ page }) => {
    // admin uses the same `page` fixture as the test (instantiated in beforeEach)
    await admin.openUserAdmin();
    await admin.clickAdd();

    await test.expect(page.locator('h6:has-text("Add User")')).toBeVisible();
  });

  test('verify already logged in functionality', async ({ page }) => {
    // navigate somewhere else and call login again (it should detect already-logged-in)
    await page.goto(env.baseURL + '/web/index.php/dashboard/index');

    // loginPage belongs to this test's page, so login() will check the page and skip if already logged in
    await loginPage.login(
      data.username || envConfig.username,
      data.password || envConfig.password
    );

    await test.expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    // clean-up per test if needed, but Playwright will close page/context per test automatically
  });
});
