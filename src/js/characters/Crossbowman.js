import LongBow from '../weapons/LongBow';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';
import Archer from './Archer';

export default class Crossbowman extends Archer {
    constructor(position, name) {
        super(position, name);
        this.attack = 8;
        this.agility = 20;
        this.luck = 15;
        this.description = 'Арбалетчик';
        this.initializeLife(85);
        this.initializeWeapon([LongBow, Knife, Arm]);
    }
}