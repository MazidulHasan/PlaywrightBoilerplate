import {test, expect} from '@playwright/test';

test('compare screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const  divCompanies = page.locator('div').filter({ hasText: 'Chosen by companies and open' }).nth(4);
    // await expect(divCompanies).toHaveScreenshot("No_trade_offs.png"); //for UI mode
    await expect(divCompanies).toHaveScreenshot("./tests/miscellaneous/compareScreenShot.spec.js-snapshots/playwright-chromium-win32.png");
});


test('First take ss and the compare it', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const  divCompanies = await page.locator('div').filter({ hasText: 'Chosen by companies and open' }).nth(4);
    const screenshotPath = './tests/miscellaneous/screenShot/companies_screenshot.png';
    await divCompanies.screenshot({ path: screenshotPath });
    await expect(divCompanies).toHaveScreenshot(screenshotPath);
});