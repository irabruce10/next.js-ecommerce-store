import { expect, test } from '@jest/globals';
import createOrUpdateCookie from '../updateQty';

const products = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
];

test('Unit: createOrUpdateCookie, Testsuit: valid inputs', () => {
  expect(createOrUpdateCookie(products, 3, 1)).toContainEqual({
    id: 3,
    quantity: 1,
  });
  expect(createOrUpdateCookie(products, 4, 2)).toContainEqual({
    id: 4,
    quantity: 2,
  });
  expect(createOrUpdateCookie(products, 2, 3)).toContainEqual({
    id: 2,
    quantity: 5,
  });
});
