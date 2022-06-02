import {OBJECT_TYPE, DIRECTIONS} from './setup.js';

class Hero {
    constructor(speed, startPos){
        this.pos = startPos;
        this.dir = null;
        this.speed = speed;
        this.timer = 0;
    }

    shouldMove(){
        if(!this.dir) return false;
        if(this.timer === this.speed){
            this.timer = 0;
            return true;
        }
        this.timer++;
    
    }

    getNextMove(objectExists){
        let nextMovePos = this.pos + this.dir.movement;

        if(
            objectExists(nextMovePos, OBJECT_TYPE.WALL) ||
            objectExists(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
        ){
            nextMovePos = this.pos;
        }

        return {nextMovePos, direction: this.dir};
    }

    makeMove(){
        const classesToRemove = [OBJECT_TYPE.HERO];
        const classesToAdd = [OBJECT_TYPE.HERO];

        return {classesToRemove, classesToAdd}
    }

    setNewPos(nextMovePos) {
        this.pos = nextMovePos;
    }

    handleKeyInput = (e, objectExist) => {
        let dir;
    
        if (e.keyCode >= 37 && e.keyCode <= 40) {
          dir = DIRECTIONS[e.key];
        } else {
          return;
        }
    
        const nextMovePos = this.pos + dir.movement;
        if (objectExist(nextMovePos, OBJECT_TYPE.WALL)) return;
        this.dir = dir;
      };
}

export default Hero;