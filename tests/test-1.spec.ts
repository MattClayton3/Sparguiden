import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.handelsbanken.se/sv/privat/spara/sparkonton-och-rantor');
  await page.getByTestId('cookie_consent_accept_all_btn').click();
  await page.getByRole('cell', { name: '1,60 %' }).click();
});