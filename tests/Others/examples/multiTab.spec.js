import { test } from '../../../fixtures/fixtures.js';

test.describe('Multi-tab example', () => {
  test('open new tab and switch', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.evaluate(() => window.open('https://example.com'))
    ]);
    await newPage.waitForLoadState();
    await test.expect(newPage.url()).toContain('example.com');
  });
});