import { test, expect } from '@jest/globals';
import { hello, generateRandomInt } from '../src/index.js';

test('hello world test', () => {
  expect(hello()).toEqual('hello, world');
})

test('random generator', () => {
  expect(generateRandomInt(49, 50)).toBeGreaterThanOrEqual(49);
  expect(generateRandomInt(2, 1)).toBeLessThan(3);
})
