import Weapon from './Weapon';

export default class Knife extends Weapon {
    constructor(name = 'Нож', attack = 5, initDurability = 300, range = 1) {
        super(name, attack, initDurability, range);
    }
}