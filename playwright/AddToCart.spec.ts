import { expect, test } from '@playwright/test';

test('add to cart test', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForURL('/products');

  await expect(
    page.getByRole('heading', { name: 'Our top Products' }),
  ).toBeVisible();
});
