import './css/style.css';
import Archer from './js/characters/Archer';
import Warrior from './js/characters/Warrior';
import Game from './js/game';

window.addEventListener('load', () => {
    let players = [
        new Warrior(10, 'Козий рог'),
        new Archer(0, 'Кривой вандал')
    ];
    new Game('#game', players).play();
});
