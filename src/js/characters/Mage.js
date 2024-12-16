import Staff from '../weapons/Staff';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Player from './Player';

export default class Mage extends Player {
    mainWeapon = [Staff, Knife, Arm];

    constructor(position, name) {
        super(position, name);
        this.attack = 5;
        this.agility = 8;
        this.description = 'Маг';
        this.weapon = new Staff();
        this.initializeLife(70);
        this.initializeMagic(100);
    }

    takeDamage(damage) {
        this.incCountBeat();
        if (this.getMagicProportion() > 0.5) {
            this.setLife(-1 * (damage / 2));
            this.setMagic(-12);
        } else {
            this.setLife(-1 * damage);
        }
    }
}