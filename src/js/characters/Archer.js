import Bow from '../weapons/Bow';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Player from './Player';

export default class Warrior extends Player {
    mainWeapon = [Bow, Knife, Arm];

    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.agility = 10;
        this.description = 'Лучник';
        this.weapon = new Bow();
    }
}