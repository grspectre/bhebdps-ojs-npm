export default class Game {
    players;
    container;
    turnCount = 1;

    constructor(container, players) {
        this.container = container;
        this.players = players;
        this.messageEventListener();
    }

    messageEventListener() {
        document
            .querySelector('body')
            .addEventListener('game_message', (ev) => {
                console.log(ev);
            })
        ;
    }

    turn() {
        console.log(`Turn ${this.turnCount}`);
        for (let player of this.players) {
            if (player.isDead()) {
                continue;
            }
            let enemy = player.chooseEnemy(this.players);
            if (enemy === null) {
                return false; // game ended
            }
            player.moveToEnemy(enemy);
            player.tryAttack(enemy);
        }
        this.turnCount++;
        return true;
    }

    play() {
        let hasNextTurn = true;
        while (hasNextTurn) {
            hasNextTurn = this.turn();
        }
    }
}
