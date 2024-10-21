import { expect, test } from '@playwright/test';

test('add to cart test', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForURL('/products');
  await expect(
    page.getByRole('heading', {
      name: 'Our top Products',
    }),
  ).toBeVisible();

  // await expect(
  //   page.getByRole('heading', { name: 'Our top Products' }),
  // ).toBeVisible();
  // await page.getByTestId('product-1').click();
  // await page.waitForURL('/products/1');
  // await expect(page.getByTestId('product-image')).toBeVisible();
  // await expect(page.getByTestId('product-price')).toBeVisible();
  // await expect(page.getByTestId('product-quantity')).toBeVisible();
  // // await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  // await expect(page.getByTestId('cart-count')).toHaveText('0');

  // // add to cart
  // await page.getByTestId('product-add-to-cart').click();

  // // Got to cart page

  // await page.getByTestId('product-add-to-cart').click();

  // await page.getByTestId('cart-link').click();
  // await page.waitForURL('/cart');

  // await expect(page.getByRole('heading', { name: 'Cart' })).toBeVisible();
  // await expect(page.getByTestId('cart-product-1')).toBeVisible();
  // await expect(page.getByTestId('cart-product-1')).toContainText(
  //   'Fjallraven - Foldsack No. 1 Backpack',
  // );
  // await expect(page.getByTestId('cart-product-quantity-2')).toHaveText('2');
  // await expect(page.getByTestId('cart-product-1')).toContainText('219.9');
});
