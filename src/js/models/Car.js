import { GAME_NUMBERS } from '../utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = GAME_NUMBERS.INIT_CAR_FORWARD_COUNT;
  }

  move = () => {
    this.forwardCount += 1;
  };
}
