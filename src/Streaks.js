var genSpaces = require('../src/genSpaces.js');
var CounterBar = require('../src/CounterBar');

module.exports = class Streaks {
  constructor(streaks) {
    this.streaks = streaks;
  }

  printStreaks(max, best, last) {
    var streaks = this.streaks;
    if (best) {
      var streak = streaks
        .sort(function(a,b) { if (a.noDays() < b.noDays()) { return -1; } else if (a.noDays() > b.noDays()) { return 1; } else { return 0; } })
        .pop();
      console.log('\x1B[37;1m' + name + '\x1B[0m: ' + genSpaces(max - name.length) + new CounterBar(streak).getBar() + '\x1B[32;1m' + streak.noDays() + ' days\x1B[0m\x1B[37m (' + streak.getStart().toString().replace(',', '') + ' - ' + streak.last.toString().replace(',', '') + ')\x1B[0m');
    }

    var currentStreak;

    if (last) {
      var lastStreak = streaks[streaks.length-1];
      if (lastStreak) {
          if (this.isCurrent(lastStreak) === true) {
            currentStreak = streaks[streaks.length - 1];
          } else {
            currentStreak = 'none';
          }
      }

      if (currentStreak != 'none') {
        console.log('\x1B[37;1m' + name + '\x1B[0m: ' + new CounterBar(currentStreak).getBar() + '\x1B[32;1m' + currentStreak.noDays() + ' days\x1B[0m\x1B[37m (since ' + currentStreak.getStart().toString().replace(',', '') + ')\x1B[0m');
      } else {
        console.log('\x1B[37;1m' + name + '\x1B[0m: ' + currentStreak);
      }
    }
  }

  isCurrent(streak) {
    var td = new Date('2019-08-25');
    var mon = `${td.getMonth() + 1}`;
    if (td.getMonth() < 10) mon = '0' + mon;
    var day = td.getDate();
    if (td.getDate() < 10) day = '0' + day;
    td = `${td.getFullYear()}-${mon}-${day}`;
    var ld = streak.last;
    if (ld.toString() == td || ld.getNext().toString() == td) {
      streak.current = true;
    } else {
      streak.current = false;
    }
    return streak.current;
  }
}
