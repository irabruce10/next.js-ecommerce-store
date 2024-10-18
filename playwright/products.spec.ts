import { expect, test } from '@playwright/test';
import { getProductsInsecure } from '../app/database/product';
test('add to cart test', async ({ page }) => {
  await page.goto('/');

  const products = await getProductsInsecure();
  for (const product of products) {
    await page.getByTestId(`product-${product.id}`).click();
    await page.waitForURL(`/products/${product.id}`);
    await page.getByTestId('product-add-to-cart').click();
    await page.getByTestId('cart-link').click();
    await page.waitForURL('/cart');
    await page.getByTestId(`cart-product-remove-${product.id}`).click();
    await expect(page.getByTestId('product-image')).toBeVisible();
    await expect(page.getByTestId('product-price')).toBeVisible();
  }
});
