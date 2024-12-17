import StormStaff from '../weapons/StormStaff';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Mage from './Mage';

export default class Demiurge extends Mage {
    constructor(position, name) {
        super(position, name);
        this.attack = 6;
        this.luck = 12;
        this.description = 'Демиург';
        this.initializeLife(80);
        this.initializeMagic(120);
        this.initializeWeapon([StormStaff, Knife, Arm]);
    }

    getDamage(distance) {
        let damage = super.getDamage(distance);
        if (this.magic > 0 && this.getLuck() > 0.6) {
            damage *= 1.5;
        }
        return damage;
    }
}