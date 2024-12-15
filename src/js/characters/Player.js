import Arm from '../weapons/Arm';

export default class Player {
    life = 100;
    magic = 20;
    speed = 1;
    attack = 10;
    agility = 5;
    luck = 10;
    description = 'Игрок';
    weapon;
    position;
    name;

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
        this.life -= damage;
        if (this.life < 0) {
            this.life = 0;
        }
    }

    isDead() {
        return this.life <= 0;
    }
}