import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.handelsbanken.se/sv/privat/spara/sparkonton-och-rantor');
  await page.getByTestId('cookie_consent_accept_all_btn').click();
  await expect(page.locator('shb-sepu-account-interests')).toContainText('3 månader med automatisk förlängning');
  await expect(page.locator('shb-sepu-account-interests')).toContainText('1,60 %');
  await page.getByRole('cell', { name: '2 år' }).click();
  await expect(page.locator('shb-sepu-account-interests')).toMatchAriaSnapshot(`- cell "3 månader med automatisk förlängning"`);
  await expect(page.locator('shb-sepu-account-interests')).toMatchAriaSnapshot(`- cell /\\d+,\\d+ %/`);
  await page.getByRole('cell', { name: '1,60 %' }).click();
});