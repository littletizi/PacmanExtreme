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
let score = 0;

function gameOver(hero, grid){
    document.removeEventListener('keydown', (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );

  gameBoard.showGameStatus(gameWin);

  clearInterval(timer);
  startButton.classList.remove('hide');
}

function checkCollision(hero, monsters){

  const collidedMonster = monsters.find((monster) => hero.pos === monster.pos);

  if (collidedMonster) {
      gameBoard.removeObject(collidedMonster.pos, [
        OBJECT_TYPE.MONSTER,
        collidedMonster.name
      ]);
      score += 1;
      collidedMonster.pos = collidedMonster.startPos;
      if(score === 4) {
        gameOver(hero, gameGrid);
      }
  }


}

function gameLoop(hero, monsters){
    gameBoard.moveCharacter(hero);
    checkCollision(hero, monsters);
    monsters.forEach(monster => gameBoard.moveCharacter(monster));
    checkCollision(hero, monsters);
}

function startGame(){
    gameWin = false;
    startButton.classList.add('hide');
    score = 0;

    gameBoard.createGrid(LEVEL);

    const hero = new Hero(2, 189);
    gameBoard.addObject(189, [OBJECT_TYPE.HERO]);

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