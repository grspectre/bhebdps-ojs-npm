import Player from '../Player';
import Warrior from '../Warrior';
import Staff from '../../weapons/Staff';
import StormStaff from '../../weapons/StormStaff';

test('creating object of Player class', () => {
    const position = 10;
    const name = "Player";

    expect(() => { new Player() }).toThrow(new Error('Position does not exist'));
    expect(() => { new Player(position) }).toThrow(new Error('Name does not exist'));

    const player = new Player(position, name);
    expect(player.life).toBe(100);
    expect(player.magic).toBe(20);
    expect(player.speed).toBe(1);
    expect(player.attack).toBe(10);
    expect(player.agility).toBe(5);
    expect(player.luck).toBe(10);
    expect(player.description).toBe('Игрок');
    expect(player.weapon.constructor.name).toBe('Arm');
    expect(player.position).toBe(position);
    expect(player.name).toBe(name);
});

test('Player methods', () => {
    const player = new Player(10, "Хоббит");
    expect(player.getDamage(1)).toBeGreaterThan(0);
    expect(player.getDamage(1)).toBeGreaterThan(0);
    expect(player.getDamage(2)).toBe(0);
    expect(player.getDamage(4)).toBe(0);

    player.takeDamage(10);
    expect(player.life).toBe(90);
    expect(player.isDead()).toBe(false);
    player.takeDamage(80);
    expect(player.life).toBe(10);
    expect(player.isDead()).toBe(false);
    player.takeDamage(90);
    expect(player.life).toBe(0);
    expect(player.isDead()).toBe(true);

    for (let i = 0; i < 10; i++) {
        let luck = player.getLuck();
        expect(luck).toBeGreaterThanOrEqual(0);
        expect(luck).toBeLessThanOrEqual(1.1);
    }
});

test('Player takeDamage', () => {
    let player = new Player(0, 'Игрок');
    player.takeDamage(10);
    expect(player.countBeat).toBe(1);
    player.incCountBeat();
    expect(player.countBeat).toBe(2);
    expect(player.life).toBe(90);
});

test('Player initializeLife', () => {
    let player = new Player(0, 'Игрок');
    player.initializeLife(10);
    expect(player.life).toBe(10);
    expect(player.initLife).toBe(10);
    expect(player.getLifeProportion()).toBe(1);
    player.life = 5;
    expect(player.getLifeProportion()).toBe(0.5);
});

test('Player initializeMagic', () => {
    let player = new Player(0, 'Игрок');
    player.initializeMagic(34);
    expect(player.magic).toBe(34);
    expect(player.initMagic).toBe(34);
    expect(player.getMagicProportion()).toBe(1);
    player.magic = 17;
    expect(player.getMagicProportion()).toBe(0.5);
    player.setMagic(-2);
    expect(player.magic).toBe(15);
    player.setMagic(-30);
    expect(player.magic).toBe(0);
});

test('Player initializeWeapon', () => {
    let player = new Player(0, 'Игрок');
    player.initializeWeapon([Staff, StormStaff]);
    expect(player.weapon.constructor.name).toBe("Staff");
    player.weapon.takeDamage(400);
    player.checkWeapon();
    expect(player.weapon.constructor.name).toBe("StormStaff");
});

test('Player moving', () => {
    let player = new Player(5, 'Игрок');
    player.moveLeft(10);
    expect(player.position).toBe(4);
    player.moveRight(10);
    expect(player.position).toBe(5);
    player.move(-10);
    expect(player.position).toBe(4);
    player.move(10);
    expect(player.position).toBe(5);
});

test('Player take damage', () => {
    let player = new Player(5, 'Игрок');
    let dodged = player.dodged();
    let luck = player.lastLuckValue;
    let condition = (100 - player.agility - player.speed) / 100;
    expect(dodged).toBe(luck > condition);

    let blocked = player.isAttackBlocked();
    luck = player.lastLuckValue;
    condition = (100 - player.luck) / 100;
    expect(blocked).toBe(luck > condition);
});

test('Player choose enemy', () => {
    let player = new Player(0, 'Игрок 1');
    let player3 = new Player(15, 'Игрок 3');
    player3.life = 1;
    let players = [
        player,
        new Player(5, 'Игрок 2'),
        player3,
    ];
    let enemy = player.chooseEnemy(players);
    expect(enemy.name).toBe("Игрок 3");
    enemy.life = 0;
    enemy = player.chooseEnemy(players);
    expect(enemy.name).toBe("Игрок 2");
    enemy.life = 0;
    enemy = player.chooseEnemy(players);
    expect(enemy).toBe(null);
});

test('Player move to enemy', () => {
    let player = new Player(0, 'Игрок 1');
    let player2 = new Player(15, 'Игрок 3');
    player.moveToEnemy(player2);
    expect(player.position).toBe(1);
});

test('Warrior test', () => {
    let pos = 0;
    let name = "Эй, ты!";
    const warrior = new Warrior(pos, name);
    warrior.takeDamage(50);
    expect(warrior.lastLuckValue).toBeUndefined();
    expect(warrior.life).toBe(70);
    warrior.life = 40;
    for (let i = 0; i < 10; i++) {
        let magic = warrior.magic;
        let life = warrior.life;
        warrior.takeDamage(3);
        if (warrior.lastLuckValue > 0.8) {
            expect(warrior.magic).toBe(magic - 3);
        } else {
            expect(warrior.life).toBe(life - 3);
        }
    }

    warrior.life = 40;
    warrior.magic = 5;
    for (;;) {
        warrior.takeDamage(10);
        if (warrior.lastLuckValue > 0.8) {
            expect(warrior.magic).toBe(0);
            expect(warrior.life).toBe(35);
            break;
        }
        warrior.life = 40;
        warrior.magic = 5;
    }

});
