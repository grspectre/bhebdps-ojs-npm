import Axe from '../weapons/Axe';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Warrior from './Warrior';

export default class Dwarf extends Warrior {
    mainWeapon = [Axe, Knife, Arm];

    constructor(position, name) {
        super(position, name);
        this.life = 130;
        this.attack = 15;
        this.luck = 20;
        this.description = 'Гном';
        this.weapon = new Axe();
    }
}