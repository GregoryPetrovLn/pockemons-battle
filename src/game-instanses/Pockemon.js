export class Pockemon {
    health = 100;
    history = [];

    constructor(img) {
        this.img = img
    }

    getDamage(damage) {
        this.health -= damage
    }

    addBattleResultToHistory(result) {
        this.history.push(result)
    }

    getHistory() {
        return this.history
    }
}