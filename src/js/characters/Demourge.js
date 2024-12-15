import StormStaff from '../weapons/StormStaff';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Mage from './Mage';

export default class Demourge extends Mage {
    mainWeapon = [StormStaff, Knife, Arm];

    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 120;
        this.attack = 6;
        this.luck = 12;
        this.description = 'Демиург';
        this.weapon = new StormStaff();
    }
}