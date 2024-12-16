import Arm from '../weapons/Arm';

export default class Player {
    speed = 1;
    attack = 10;
    agility = 5;
    luck = 10;
    description = 'Игрок';
    countBeat = 0;
    weapon;
    position;
    name;
    life;
    initLife;
    magic;
    initMagic;

    constructor(position, name) {
        if (!Number.isInteger(position)) {
            throw new Error('Position does not exist');
        }
        this.position = position;
        if (typeof name !== 'string') {
            throw new Error('Name does not exist');
        }
        this.name = name;
        this.weapon = new Arm();
        this.initializeLife(100);
        this.initializeMagic(20);
    }

    getLuck() {
        const randomNumber = Math.random() * 100;
        return (randomNumber + this.luck) / 100;
    }

    getDamage(distance) {
        if (distance > this.weapon.range) {
            return 0;
        }
        return (this.attack + this.weapon.getDamage()) * this.getLuck() / 100;
    }

    takeDamage(damage) {
        this.incCountBeat();
        this.setLife(-1 * damage);
    }

    isDead() {
        return this.life <= 0;
    }

    initializeLife(life) {
        this.initLife = life;
        this.life = life;
    }

    getLifeProportion() {
        return this.life / this.initLife;
    }

    setLife(life) {
        this.life += life;
        if (this.life < 0) {
            this.life = 0;
        }
    }

    initializeMagic(magic) {
        this.magic = magic;
        this.initMagic = magic;
    }

    getMagicProportion() {
        return this.magic / this.initMagic;
    }

    setMagic(magic) {
        this.magic += magic;
        if (this.magic < 0) {
            this.magic = 0;
        }
    }

    incCountBeat() {
        this.countBeat += 1;
    }
}