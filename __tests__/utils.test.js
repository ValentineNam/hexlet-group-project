import { test, expect } from '@jest/globals';
import { generateRandomInt } from '../src/utils.js';

test('random generator', () => {
  expect(generateRandomInt(49, 50)).toBeGreaterThanOrEqual(49);
  expect(generateRandomInt(2, 1)).toBeLessThan(3);
})
