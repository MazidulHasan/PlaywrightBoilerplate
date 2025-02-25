import {test, expect} from '@playwright/test';

test('compare screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveScreenshot("./compareScreenShot.spec.js-snapshots/playwright.png"); //this is for terminal run
    // await expect(page).toHaveScreenshot("playwright.png"); //this is for playwright UI run
});