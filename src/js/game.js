export default class Game {
    players;
    el;
    turnCount = 1;

    constructor(container, players) {
        this.el = document.querySelector(container);
        this.players = players;
        this.messageEventListener();
    }

    info(clz, message) {
        let div = document.createElement('div');
        let txt = document.createTextNode(message);
        div.appendChild(txt);
        div.classList.add(clz);
        this.el.appendChild(div);
    }

    messageEventListener() {
        document
            .querySelector('body')
            .addEventListener('game_message', (ev) => {
                let player = ev.detail.player;
                let message = ev.detail.message;
                this.info('message', `${player.name} (${player.description}): ${message}`);
            })
        ;
    }

    turn() {
        this.info('title', `Turn ${this.turnCount}`);
        for (let player of this.players) {
            if (player.isDead()) {
                continue;
            }
            let enemy = player.chooseEnemy(this.players);
            if (enemy === null) {
                this.info('title', `Won ${player.name}`);
                return false; // game ended
            }
            player.moveToEnemy(enemy);
            player.tryAttack(enemy);
        }
        this.turnCount++;
        return true;
    }

    play() {
        this.info('title', 'play begin');
        let hasNextTurn = true;
        while (hasNextTurn) {
            hasNextTurn = this.turn();
        }
    }
}
