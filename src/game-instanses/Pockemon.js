export class Pockemon {
    life = 100;
    history = [];

    constructor(img) {
        this.img = img
    }

    getDamage(damage) {
        this.life -= damage
    }

    addBattleResultToHistory(result) {
        this.history.push(result)
    }

    getHistory() {
        return this.history
    }
}