import { test } from '../../../fixtures/fixtures.js';

// This is an illustrative example; OrangeHRM may not have drag-drop elements.
// Replace URL with a page that supports drag and drop when demonstrating.

test.describe('Drag and Drop example', () => {
  test('drag element to target', async ({ page, logger }) => {
    await page.goto('https://marcojakob.github.io/dart-dnd/basic/');
    const source = page.locator('.draggable');
    const target = page.locator('.droppable');
    await source.first().dragTo(target.first());
    await test.expect(target.first().locator('p')).toContainText('Dropped');
  });
});