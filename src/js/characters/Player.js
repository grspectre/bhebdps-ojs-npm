import Arm from '../weapons/Arm';

export default class Player {
    speed = 1;
    attack = 10;
    agility = 5;
    luck = 10;
    description = 'Игрок';
    countBeat = 0;
    weaponList = [];
    weapon;
    position;
    name;
    life;
    initLife;
    magic;
    initMagic;
    lastLuckValue;

    constructor(position, name) {
        if (!Number.isInteger(position)) {
            throw new Error('Position does not exist');
        }
        this.position = position;
        if (typeof name !== 'string') {
            throw new Error('Name does not exist');
        }
        this.name = name;
        this.initializeLife(100);
        this.initializeMagic(20);
        this.initializeWeapon([Arm]);
    }

    dispatchGameMessage(message) {
        let event = new CustomEvent("game_message", { detail: {
            message: message,
            player: this,
        }});
        try {
            document.querySelector('body').dispatchEvent(event);
        } catch (error) {
//            console.log(error.message);
        }
    }

    getLuck() {
        const randomNumber = Math.random() * 100;
        this.lastLuckValue = (randomNumber + this.luck) / 100;
        return this.lastLuckValue;
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

    initializeWeapon(weapons) {
        for (let weaponClass of weapons) {
            let weapon = new weaponClass();
            this.weaponList.push(weapon);
        }
        this.weapon = this.weaponList.shift();
    }

    incCountBeat() {
        this.countBeat += 1;
    }

    moveLeft(distance) {
        this.dispatchGameMessage(`Move to left. Distance: ${distance}`);
        if (distance > this.speed) {
            distance = this.speed;
        }
        this.position -= distance;
    }

    moveRight(distance) {
        this.dispatchGameMessage(`Move to right. Distance: ${distance}`);
        if (distance > this.speed) {
            distance = this.speed;
        }
        this.position += distance;
    }

    move(distance) {
        if (distance < 0) {
            this.moveLeft(Math.abs(distance));
        } else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
        return this.getLuck() > ((100 - this.luck) / 100);
    }

    dodged() {
        let luck = this.getLuck();
        let condition = (100 - this.agility - this.speed) / 100;
        return luck > condition;
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage(damage);
            this.dispatchGameMessage(`Attack was blocked. Weapon durability: ${this.weapon.durability}`);
            return;
        }
        if (this.dodged()) {
            this.dispatchGameMessage(`Attack was dodged.`);
            return;
        }

        this.takeDamage(damage);
        this.dispatchGameMessage(`Damage: ${damage}. Life: ${this.life}`);
    }

    checkWeapon() {
        if (this.weapon.isBroken()) {
            this.dispatchGameMessage(`Weapon ${this.weapon.name} was broken.`)
            this.weapon = this.weaponList.shift();
            this.dispatchGameMessage(`Pick ${this.weapon.name} weapon`);
        }
    }

    tryAttack(enemy) {
        let distance = Math.abs(this.position - enemy.position);
        if (this.weapon.range < distance) {
            return;
        }
        this.weapon.takeDamage(10 * this.getLuck());
        let damage = this.getDamage(distance);
        enemy.takeAttack(damage);
        if (distance === 0) {
            enemy.moveRight(1);
            enemy.takeAttack(damage * 2);
        }
    }

    chooseEnemy(players) {
        let enemy = null;
        for (let player of players) {
            if (player === this || player.isDead()) {
                continue;
            }
            if (enemy === null) {
                enemy = player;
            } else {
                if (enemy.life > player.life) {
                    enemy = player;
                }
            }
        }
        return enemy;
    }

    moveToEnemy(enemy) {
        let distance = enemy.position - this.position;
        this.dispatchGameMessage(`Move to ${enemy.name} (${enemy.position} - ${this.position}). Distance: ${distance}`);
        this.move(distance);
    }
}