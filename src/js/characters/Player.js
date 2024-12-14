import Arm from '../weapons/Arm';
import Knife from '../weapons/Knife';

export default class Player {
  constructor() {

    this.leftHand = new Arm();
    this.rightHand = new Knife();
  }
}