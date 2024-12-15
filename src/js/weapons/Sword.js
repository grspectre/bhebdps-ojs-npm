import Weapon from './Weapon';

export default class Sword extends Weapon {
    constructor(name = 'Меч', attack = 25, initDurability = 500, range = 1) {
        super(name, attack, initDurability, range);
    }
}