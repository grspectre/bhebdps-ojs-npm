import Bow from '../weapons/Bow';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Player from './Player';

export default class Archer extends Player {
    constructor(position, name) {
        super(position, name);
        this.attack = 5;
        this.agility = 10;
        this.description = 'Лучник';
        this.initializeLife(80);
        this.initializeMagic(35);
        this.initializeWeapon([Bow, Knife, Arm]);
    }

    getDamage(distance) {
        if (distance > this.weapon.range) {
            return 0;
        }
        // ( attack + weaponDamage ) * getLuck() * distance / weaponRange
        return (this.attack + this.weapon.getDamage()) * this.getLuck() * distance / this.weapon.range;
    }
}