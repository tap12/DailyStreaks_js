module.exports = class CounterBar {
  constructor(streak) {
    this.streak = streak;
  }

  getBar() {
    const bar = '\x1B[42m'; // green color
      for (const i = 0; i <= this.streak.noDays(); i++) {
      bar += ' '; // add spaces
      }
    bar += '\x1B[0m '; // reset
    return bar;
  }
}
