import { DIRECTIONS, OBJECT_TYPE } from './setup.js';

export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.MONSTER)
  ) {
    const key = keys[Math.floor(Math.random() * keys.length)];
    dir = DIRECTIONS[key];
    nextMovePos = position + dir.movement;
  }

  return { nextMovePos, direction: dir };
}