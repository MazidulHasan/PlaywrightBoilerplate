import { test } from '../../../fixtures/fixtures.js';
import { LoginPage } from '../pages/LoginPage.js';
import { AdminPage } from '../pages/AdminPage.js';
import env from '../../../config/env.config.js';
import { readJson } from '../../../utils/jsonUtils.js';

const data = readJson();

test.describe('Regression - Admin', () => {
  test('open user management add user modal', async ({ page, logger, envConfig }) => {
    const loginPage = new LoginPage(page, logger);
    const admin = new AdminPage(page, logger);

    await loginPage.goto(envConfig.baseURL);
    await loginPage.login(data.username || envConfig.username, data.password || envConfig.password);

    await admin.openUserAdmin();
    await admin.clickAdd();

    await page.waitForSelector('h6:has-text("Add User")');
    const visible = await page.isVisible('h6:has-text("Add User")');
    await test.expect(visible).toBe(true);
  });
});