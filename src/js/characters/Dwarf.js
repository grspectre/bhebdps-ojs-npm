import Axe from '../weapons/Axe';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Warrior from './Warrior';

export default class Dwarf extends Warrior {
    constructor(position, name) {
        super(position, name);
        this.attack = 15;
        this.luck = 20;
        this.description = 'Гном';
        this.initializeLife(130);
        this.initializeWeapon([Axe, Knife, Arm]);
    }

    takeDamage(damage) {
        this.incCountBeat();
        if (this.countBeat % 6 === 0 && this.getLuck() > 0.5) {
            this.setLife(-1 * (damage / 2));
        } else {
            this.setLife(-1 * damage);
        }
    }
}