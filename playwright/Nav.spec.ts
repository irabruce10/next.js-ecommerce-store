import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Featured Products' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'About' }).click();
});
