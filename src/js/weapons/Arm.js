import Weapon from './Weapon';

export default class Arm extends Weapon {
    constructor(name = 'Рука', attack = 1, initDurability = Number.POSITIVE_INFINITY, range = 1) {
        super(name, attack, initDurability, range);
    }
}