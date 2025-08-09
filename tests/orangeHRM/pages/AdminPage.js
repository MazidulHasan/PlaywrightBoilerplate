import { BasePage } from './BasePage.js';

export class AdminPage extends BasePage {
  constructor(page, logger) {
    super(page, logger);
    this.userAdminMenu = page.getByRole('link', { name: 'Admin' })
    this.addBtn = page.locator('button:has-text("Add")');
  }

  async openUserAdmin() {
    await this.click(this.userAdminMenu);
  }

  async clickAdd() {
    await this.click(this.addBtn);
  }
}