import './css/style.css';
//import Archer from './js/characters/Archer';
import Demiurge from './js/characters/Demiurge';
import Warrior from './js/characters/Warrior';
import Game from './js/game';

window.addEventListener('load', () => {
    if (document.readyState === 'complete') {
        let players = [
            new Warrior(10, 'Козий рог'),
            new Warrior(0, 'Кривой вандал'),
            new Demiurge(20, 'Зажолух'),
        ];
        new Game('#game', players).play();
    }
});
