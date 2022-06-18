import { LEVEL, OBJECT_TYPE } from './setup.js';
import { randomMovement } from './MonsterMoves.js';


import GameBoard from './GameBoard.js';
import Hero from './Hero.js';
import Monster from './Monster.js';

const gameGrid = document.querySelector('#game');
const startButton = document.querySelector('#start-button');


const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

let gameWin = false;
let timer = null;

function gameOver(hero, grid){

}

function checkCollision(hero, monsters){

}

function gameLoop(hero, monsters){
    gameBoard.moveCharacter(hero);
    monsters.forEach(monster => gameBoard.moveCharacter(monster));
}

function startGame(){
    gameWin = false;
    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

    const hero = new Hero(2, 33);
    gameBoard.addObject(33, [OBJECT_TYPE.HERO]);

    document.addEventListener('keydown', (e) =>
        hero.handleKeyInput(e, gameBoard.objectExist)
    );

    
    const monsters = [
        
        new Monster(5, 22, randomMovement, OBJECT_TYPE.MONSTER),
        new Monster(5, 39, randomMovement, OBJECT_TYPE.MONSTER),
        new Monster(5, 342, randomMovement, OBJECT_TYPE.MONSTER),
        new Monster(5, 359, randomMovement, OBJECT_TYPE.MONSTER)
    ];

    timer = setInterval(() => gameLoop(hero, monsters), GLOBAL_SPEED)
}

startButton.addEventListener('click', startGame, GLOBAL_SPEED);