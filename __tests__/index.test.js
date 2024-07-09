import { test, expect } from '@jest/globals';
import { hello } from '../src';

test('hello world test', () => {
  expect(hello()).toEqual('hello, world');
})
