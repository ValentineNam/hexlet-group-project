import { test, expect } from '@jest/globals';
import Game from '../src/game.js';

test('test new game obj', () => {
  expect(new Game()).toMatchObject({"field": [], "score": [0, 0]});
})
