'use strict'

const startGame = () => {
  this.score = [0, 0];
}

const generateField = (size) => {
  this.field = new Array();
}

export default function Game() {
  this.score = [0, 0];
  this.field = [];
  this.startGame = startGame;
  this.generateField = generateField;
  this.turn = 'playerX';
}

let game = new Game();
