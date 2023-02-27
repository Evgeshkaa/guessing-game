class GuessingGame {

    min;
    max;

    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.max;
    }

    lower() {
        this.max = this.max - Math.round((this.max - this.min) / 2);
    }

    greater() {
        this.min = this.min + Math.round((this.max - this.min) / 2);
    }
}

module.exports = GuessingGame;
