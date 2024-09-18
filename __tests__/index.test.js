import { test, expect } from '@jest/globals';
import { hello } from '../src/index.js';

test('hello world test', () => {
  expect(hello()).toEqual('hello, world');
})
