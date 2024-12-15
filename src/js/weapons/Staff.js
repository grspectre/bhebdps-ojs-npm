import Weapon from './Weapon';

export default class Staff extends Weapon {
    constructor(name = 'Посох', attack = 8, initDurability = 300, range = 2) {
        super(name, attack, initDurability, range);
    }
}