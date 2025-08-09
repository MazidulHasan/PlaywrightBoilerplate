import { BasePage } from './BasePage.js';

export class DashboardPage extends BasePage {
  constructor(page, logger) {
    super(page, logger);
    this.header = page.locator('.oxd-topbar-header-title');
  }

  async getHeaderText() {
    return this.header.textContent();
  }
}