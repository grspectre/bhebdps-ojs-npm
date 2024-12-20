import Sword from '../weapons/Sword';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Player from './Player';

export default class Warrior extends Player {
    constructor(position, name) {
        super(position, name);
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.initializeLife(120);
        this.initializeWeapon([Sword, Knife, Arm]);
    }

    takeDamage(damage) {
        this.incCountBeat();
        if (this.getLifeProportion() < 0.5 && this.getLuck() > 0.8) {
            if (this.magic < damage) {
                damage -= this.magic;
                this.magic = 0;
                this.setLife(-1 * damage);
            } else {
                this.setMagic(-1 * damage);
            }
        } else {
            this.setLife(-1 * damage);
        }
    }
}