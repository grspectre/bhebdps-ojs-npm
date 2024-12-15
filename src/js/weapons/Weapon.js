export default class Weapon {
    name;
    attack;
    durability;
    initDurability;
    range;

    constructor(name, attack, initDurability, range) {
        if (typeof name !== 'string') {
            throw new Error('Name does not exist');
        }
        this.name = name;
        this.attack = attack;
        this.initDurability = initDurability;
        this.durability = initDurability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        }
        if (this.durability / this.initDurability < 0.3) {
            return this.attack / 2;
        }
        return this.attack;
    }

    isBroken() {
        return this.durability === 0;
    }
}