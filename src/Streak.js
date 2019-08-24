const BaseStreak = require('./BaseStreak.js');

module.exports = class Streak extends BaseStreak {
  noDays() {
    var a = this.start;
    var b = this.last;
    // console.log('a', a);
    // console.log('b', b);
    var time = Math.abs(new Date(a).getTime() - new Date(b).getTime());
    var days = Math.ceil(time / 86400000);
    // console.log('days', days);
    return days;
  }
}
