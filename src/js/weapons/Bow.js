import Weapon from './Weapon';

export default class Bow extends Weapon {
    constructor(name = 'Лук', attack = 10, initDurability = 200, range = 3) {
        super(name, attack, initDurability, range);
    }
}