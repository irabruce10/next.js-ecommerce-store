import test, { expect } from '@playwright/test';

test('Checkout flow, payment page, and thank you page', async ({ page }) => {
  // Add a product to the cart
  const addToCartButton = page.locator('.product-card button');
  await addToCartButton.click();

  // Proceed to checkout
  const checkoutButton = page.locator('.cart-summary button');
  await checkoutButton.click();

  // Fill in the shipping information
  const firstNameInput = page.locator('input[name="firstName"]');
  const lastNameInput = page.locator('input[name="lastName"]');
  const addressInput = page.locator('input[name="address"]');
  const cityInput = page.locator('input[name="city"]');
  const postalCodeInput = page.locator('input[name="postalCode"]');

  await firstNameInput.fill('John');
  await lastNameInput.fill('Doe');
  await addressInput.fill('123 Main St');
  await cityInput.fill('New York');
  await postalCodeInput.fill('10001');

  // Submit the shipping information
  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  // Verify the payment page
  await expect(page).toHaveURL('/payment');

  // Fill in the payment information
  const cardNumberInput = page.locator('input[name="cardNumber"]');
  const expirationDateInput = page.locator('input[name="expirationDate"]');
  const cvvInput = page.locator('input[name="cvv"]');

  await cardNumberInput.fill('1234567890123456');
  await expirationDateInput.fill('12/25');
  await cvvInput.fill('123');

  // Submit the payment information
  await submitButton.click();

  // Verify the thank you page
  await expect(page).toHaveURL('/thank-you');
  await expect(page.locator('.thank-you-message')).toContainText(
    'Thank you for your order!',
  );
});
