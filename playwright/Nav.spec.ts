import { test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('/');

  // await expect(
  //   page.getByRole('heading', { name: 'Welcome to our E-soko' }),
  // ).toBeVisible();

  await page.getByRole('link', { name: 'About' }).click();
});
