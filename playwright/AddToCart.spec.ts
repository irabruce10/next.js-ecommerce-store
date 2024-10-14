import { expect, test } from '@playwright/test';

test('add to cart test', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForURL('/products');

  await expect(
    page.getByRole('heading', { name: 'Our top Products' }),
  ).toBeVisible();
  await expect(page.getByTestId('product-image')).toBeVisible();
  // await page.getByTestId('product-2').click();

  // await page
  //   .getByRole('link', {
  //     name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //   })
  //   .click();

  await page.getByRole('button', { name: 'Add to Cart' }).click();
});
