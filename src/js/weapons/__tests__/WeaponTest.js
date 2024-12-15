import Weapon from '../Weapon';
import Arm from '../Arm';
import Bow from '../Bow';
import Sword from '../Sword';
import Knife from '../Knife';
import Staff from '../Staff';
import LongBow from '../LongBow';
import Axe from '../Axe';
import StormStaff from '../StormStaff';

const wName = "Старый меч";
const wAttack = 20;
const wInitDurability = 10;
const wRange = 1;

const wParams = [
    [Arm, "Рука", 1, Number.POSITIVE_INFINITY, 1],
    [Bow, "Лук", 10, 200, 3],
    [Sword, "Меч", 25, 500, 1],
    [Knife, "Нож", 5, 300, 1],
    [Staff, "Посох", 8, 300, 2],
    [LongBow, "Длинный лук", 15, 200, 4],
    [Axe, "Секира", 27, 800, 1],
    [StormStaff, "Посох Бури", 10, 300, 3],
];

test('creating object of Weapon class', () => {
    expect(() => { new Weapon() }).toThrow(new Error('Name does not exist'));

    const weapon = new Weapon(wName, wAttack, wInitDurability, wRange);
    expect(weapon.name).toBe(wName);
    expect(weapon.attack).toBe(wAttack);
    expect(weapon.durability).toBe(wInitDurability);
    expect(weapon.initDurability).toBe(wInitDurability);
    expect(weapon.range).toBe(wRange);
});

test('Weapon class methods', () => {
    const weapon = new Weapon(wName, wAttack, wInitDurability, wRange);
    weapon.takeDamage(5);
    expect(weapon.durability).toBe(5);
    expect(weapon.isBroken()).toBe(false);
    expect(weapon.getDamage()).toBe(wAttack);

    weapon.takeDamage(3);
    expect(weapon.durability).toBe(2);
    expect(weapon.isBroken()).toBe(false);
    expect(weapon.getDamage()).toBe(wAttack / 2);

    weapon.takeDamage(10);
    expect(weapon.durability).toBe(0);
    expect(weapon.isBroken()).toBe(true);
    expect(weapon.getDamage()).toBe(0);
});

for (let item of wParams) {
    const weaponClass = item.shift();
    const weapon = new weaponClass();
    const className = weapon.constructor.name;
    test(`creating object of ${className} class`, () => {
        expect(weapon.name).toBe(item[0]);
        expect(weapon.attack).toBe(item[1]);
        expect(weapon.durability).toBe(item[2]);
        expect(weapon.initDurability).toBe(item[2]);
        expect(weapon.range).toBe(item[3]);
    });
}