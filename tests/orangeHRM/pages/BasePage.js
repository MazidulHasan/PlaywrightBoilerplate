export class BasePage {
  constructor(page, logger) {
    this.page = page;
    this.logger = logger;
  }

  async goto(url) {
    this.logger?.info(`Goto: ${url}`);
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async click(locator) {
    try {
      await locator.waitFor({ state: 'visible', timeout: 5000 });
      await locator.click();
    } catch (err) {
      this.logger?.error(`Click failed: ${err}`);
      throw err;
    }
  }

  async fill(locator, value) {
    try {
      await locator.waitFor({ state: 'visible', timeout: 5000 });
      await locator.fill(value);
    } catch (err) {
      this.logger?.error(`Fill failed: ${err}`);
      throw err;
    }
  }

  async selectByValue(locator, value) {
    await locator.selectOption({ value });
  }

  async waitForText(text, timeout = 5000) {
    await this.page.waitForSelector(`text=${text}`, { timeout });
  }

  async dragAndDrop(source, target) {
    await source.dragTo(target);
  }

  async handleDialog(accept = true) {
    this.page.on('dialog', async dialog => {
      if (accept) await dialog.accept(); else await dialog.dismiss();
    });
  }
}