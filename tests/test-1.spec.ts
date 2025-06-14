import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.handelsbanken.se/sv/privat/vardagstjanster/konton-och-betalningar/rantor-privatpersoner');
  await page.getByTestId('CookieConsent__acceptButton').click();
  await page.getByText('månader med automatisk förlängning').click();
  await page.getByText('2,10 %').click();
  await expect(page.locator('[data-test-id="data-table"] tbody')).toMatchAriaSnapshot(`- cell "3 månader med automatisk förlängning"`);
  await expect(page.locator('[data-test-id="data-table"] tbody')).toMatchAriaSnapshot(`- cell /\\d+,\\d+ %/`);
  
  console.log( )

  await page.getByRole('main').click();
  await expect(page.getByRole('cell', { name: 'månader med automatisk förlängning' }).locator('div')).toBeVisible();
  await page.getByText('2,10 %').click();

});