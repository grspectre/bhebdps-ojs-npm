import Sword from './Sword';

export default class Axe extends Sword {
    constructor(name = 'Секира', attack = 27, initDurability = 800, range = null) {
        if (range === null) {
            range = 1;
        }
        super(name, attack, initDurability, range);
    }
}