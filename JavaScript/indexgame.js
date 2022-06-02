import { LEVEL, OBJECT_TYPE } from './setup.js';

import GameBoard from './GameBoard.js';

const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

let gameWin = false;

function gameOver(pacman, grid){

}

function checkCollision(pacman, ghosts){

}

function gameLoop(pacman, ghosts){

}

function startGame(){

}