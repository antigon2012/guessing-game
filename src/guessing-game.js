class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minV = min;
    this.maxV = max;
  }

  guess() {
    return Math.round((this.maxV + this.minV) / 2);
  }

  lower() {
    return (this.maxV = Math.round((this.maxV + this.minV) / 2));
  }

  greater() {
    return (this.minV = Math.round((this.maxV + this.minV) / 2));
  }
}

module.exports = GuessingGame;
