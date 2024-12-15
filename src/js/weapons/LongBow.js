import Bow from './Bow';

export default class LongBow extends Bow {
    constructor(name = 'Длинный лук', attack = 15, initDurability = null, range = 4) {
        if (initDurability === null) {
            initDurability = 200;
        }
        super(name, attack, initDurability, range);
    }
}