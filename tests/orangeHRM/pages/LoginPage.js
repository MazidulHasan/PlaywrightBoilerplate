import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
  constructor(page, logger) {
    super(page, logger);
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.locator('button[type="submit"]');
    // dynamic examples
    this.flash = page.locator('.oxd-topbar-header-title');
    this.userAdminMenu = page.getByRole('link', { name: 'Admin' })
  }

  async login(username, password) {
    // Check if already on dashboard
    if (await this.userAdminMenu.isVisible({ timeout: 2000 }).catch(() => false)) {
      this.logger?.info('Already logged in — skipping login steps.');
      return;
    }

    this.logger?.info('Logging in...');

    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginBtn);
    await this.page.waitForLoadState('networkidle');
  }
}