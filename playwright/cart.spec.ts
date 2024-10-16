import { test, expect } from '@playwright/test';
test.describe('Shopping Cart', () => {
  test('Add to cart, change quantity, and remove from cart', async ({
    page,
  }) => {
    // Open the e-commerce store
    await page.goto('/');

    // Add a product to the cart
    const addToCartButton = page.locator('.product-card button');
    await addToCartButton.click();

    // Verify the product is added to the cart
    const cartCount = page.locator('.cart-count');
    await expect(cartCount).toHaveText('1');

    // Change the quantity of the product in the cart
    const quantityInput = page.locator('.cart-item input');
    await quantityInput.fill('2');
    await page.keyboard.press('Enter');

    // Verify the quantity is updated
    await expect(quantityInput).toHaveValue('2');

    // Remove the product from the cart
    const removeButton = page.locator('.cart-item button');
    await removeButton.click();

    // Verify the product is removed from the cart
    await expect(cartCount).toHaveText('0');
  });
});
