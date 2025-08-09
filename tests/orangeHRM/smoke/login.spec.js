import { test } from '../../../fixtures/fixtures.js';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import env from '../../../config/env.config.js';
import { readJson } from '../../../utils/jsonUtils.js';

const data = readJson();

test.describe('Smoke - Login', () => {
  test('should login with valid creds', async ({ page, logger, envConfig }) => {
    const loginPage = new LoginPage(page, logger);
    const dashboard = new DashboardPage(page, logger);

    await loginPage.goto(envConfig.baseURL);
    await loginPage.login(data.username || envConfig.username, data.password || envConfig.password);

    const header = await dashboard.getHeaderText();
    logger.info(`Header text: ${header}`);
    await test.expect(header).toContain('Dashboard');
  });
});