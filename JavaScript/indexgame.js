import { LEVEL, OBJECT_TYPE } from './setup.js';

import GameBoard from './GameBoard.js';
import Hero from './Hero.js';

const gameGrid = document.querySelector('#game');
const startButton = document.querySelector('#start-button');


const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

let gameWin = false;
let timer = null;

function gameOver(pacman, grid){

}

function checkCollision(pacman, ghosts){

}

function gameLoop(hero, ghosts){
    gameBoard.moveCharacter(hero);
}

function startGame(){
    gameWin = false;
    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

    const hero = new Hero(2, 151);
    gameBoard.addObject(151, [OBJECT_TYPE.HERO]);

    document.addEventListener('keydown', (e) =>
        hero.handleKeyInput(e, gameBoard.objectExist)
    );

    timer = setInterval(() => gameLoop(hero), GLOBAL_SPEED)
}

startButton.addEventListener('click', startGame, GLOBAL_SPEED);