import { expect, test } from '@jest/globals';
import { add, remove } from '../math';

test('add 2 numbers', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(10, 10)).toBe(20);
});

test('subtract 2 numbers', () => {
  expect(remove(5, 3)).toBe(2);
  expect(remove(15, 10)).toBe(5);
});

test('prodct', () => {
  const productData = {
    id: 1,
    name: 'Test Product',
    price: 10.99,
    description: 'This is a test product.',
    category: 'Test',
    image: 'test-image.jpg',
    quantity: 5,
    countInStock: 10,
  };

  expect(productData.id).toBe(1);
});
