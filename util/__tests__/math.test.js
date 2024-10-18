import { expect, test } from '@jest/globals';
import { add } from '../math';
test('add 2 numbers', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(10, 10)).toBe(20);
});
