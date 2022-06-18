import { DIRECTIONS,OBJECT_TYPE } from "./setup.js";
import { randomMovement } from './MonsterMoves.js';
class Monster {
    constructor(speed = 5, startPos, movement, name) {
        this.name = name;
        this.movement = movement;
        this.startPos = startPos;
        this.pos = startPos;
        this.dir = DIRECTIONS.ArrowRight;
        this.speed = speed;
        this.timer = 0;
    }

    shouldMove() {
        if (this.timer === this.speed) {
          this.timer = 0;
          return true;
        }
        this.timer++;
      }
    
      getNextMove(objectExist) {
        const { nextMovePos, direction } = this.movement(
          this.pos,
          this.dir,
          objectExist
        );
        return { nextMovePos, direction };
      }
    
      makeMove() {
        const classesToRemove = [OBJECT_TYPE.MONSTER, this.name];
        let classesToAdd = [OBJECT_TYPE.MONSTER, this.name];
    
    
        return { classesToRemove, classesToAdd };
      }
    
      setNewPos(nextMovePos, direction) {
        this.pos = nextMovePos;
        this.dir = direction;
      }
}

export default Monster;