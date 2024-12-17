import Player from '../Player';
import Warrior from '../Warrior';

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

test('Warrior test', () => {
    let pos = 0;
    let name = "Эй, ты!";
    const warrior = new Warrior(pos, name);
});
