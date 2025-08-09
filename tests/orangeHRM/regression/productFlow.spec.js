const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../fixtures/pageObjects');

test.describe('Product Flow', () => {
  let page;
  let loginPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await page.goto('https://example.com/login');
    await loginPage.login('adminUser', 'password123');
  });

  test('Add product to cart using filter locators', async () => {
    await page.goto('https://example.com/products');

    await page
      .getByRole('listitem')
      .filter({ hasText: 'Product 2' })
      .getByRole('button', { name: 'Add to cart' })
      .click();

    await expect(page.getByText('Product 2 added to cart')).toBeVisible();
  });

  test.afterAll(async () => {
    await page.close();
  });
});
