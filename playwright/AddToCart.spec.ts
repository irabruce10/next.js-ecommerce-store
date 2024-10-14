import { expect, test } from '@playwright/test';

test('add to cart test', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForURL('/products');

  await expect(
    page.getByRole('heading', { name: 'Our top Products' }),
  ).toBeVisible();
  await page.getByTestId('product-2').click();
  await page.waitForURL('/products/2');
  await expect(page.getByTestId('product-image')).toBeVisible();
  await expect(page.getByTestId('product-image')).toBeVisible();
  await expect(page.getByTestId('product-price')).toBeVisible();
  await expect(page.getByTestId('product-quantity')).toBeVisible();

  // add to cart
  await page.getByTestId('product-add-to-cart').click();

  // Got to cart page
  // await page.getByRole('link', { name: 'cart' }).click();
  await page.getByTestId('product-add-to-cart').click();

  await page.getByTestId('cart-link').click();
  await page.waitForURL('/cart');

  // await expect(page.getByTestId('cart-product-remove-1')).toBeVisible();

  // await page
  //   .getByRole('link', {
  //     name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //   })
  //   .click();
});
