import Staff from './Staff';

export default class StormStaff extends Staff {
    constructor(name = 'Посох Бури', attack = 10, initDurability = null, range = 3) {
        if (initDurability === null) {
            initDurability = 300;
        }
        super(name, attack, initDurability, range);
    }
}