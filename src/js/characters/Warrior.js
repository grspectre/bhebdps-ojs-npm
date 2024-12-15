import Sword from '../weapons/Sword';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Player from './Player';

export default class Warrior extends Player {
    mainWeapon = [Sword, Knife, Arm];

    constructor(position, name) {
        super(position, name);
        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new Sword();
    }
}