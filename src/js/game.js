import Archer from './characters/Archer';
import Warrior from './characters/Warrior';
import Mage from './characters/Mage';
import Dwarf from './characters/Dwarf';
import Crossbowman from './characters/Crossbowman';
import Demourge from './characters/Demourge';

export function play() {
    const archer = new Archer();
    const characters = [
        {name: 'мечник', obj: archer},
        {name: 'маг', obj: new Mage()},
        {name: 'маг', obj: new Mage()},
        {name: 'лучник', obj: new Crossbowman()},
        {name: 'воин', obj: new Warrior()},
        {name: 'гном', obj: new Dwarf()},
        {name: 'мург', obj: new Demourge()},
    ];
      
    const alive = characters.filter(item => item.health > 0);
    console.log(alive);
}
