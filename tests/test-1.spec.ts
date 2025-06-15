import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.lansforsakringar.se/stockholm/privat/bank/spara/alla-konton-for-sparande/fastrantekonto/');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
});