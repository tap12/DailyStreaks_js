var fs = require('fs');
var DayDate = require('../src/DayDate');
var Streak = require('../src/Streak');
var CounterBar = require('../src/CounterBar');
var Streaks = require('../src/Streaks.js');


var habits = [];


fs.readFile('./data.txt', 'utf-8', function(e, d) {
  habits = d.split(/\n/);

  // console.log('habits', habits);

  var done = [];
  var dates = {};

  console.log('\x1B[37;1;4mCurrent Streaks\x1B[0m');

  for (var i = 0; i < habits.length; i++) {
    if (!done.includes(habits[i].substring(0, habits[i].indexOf(',')))) {
      done = done.concat([habits[i].substring(0, habits[i].indexOf(','))])
      name = habits[i].substring(0, habits[i].indexOf(','));

      for (var j = 0; j < habits.length; j++) {
        // filter
        if (habits[j].startsWith(name)) {
          if (!dates[name]) {
            dates[name] = [];
          }
          dates[name] = dates[name].concat([new DayDate(habits[j].substring(habits[j].indexOf(',')))]);
        }
      }

      streaks = [];
      var prev = null;
      var currentStreak = null;

      dates[name].forEach(dayDate => {
        if (prev && prev.getNext().toString() == dayDate.toString().replace(',', '')) {
          if (currentStreak) {
            currentStreak.setEndDate(dayDate);
          } else {
            currentStreak = new Streak();
            currentStreak.setStartDate(dayDate);
            currentStreak.setEndDate(dayDate);
            streaks.push(currentStreak);
          }
        } else {
          currentStreak = new Streak();
          currentStreak.setStartDate(dayDate);
          currentStreak.setEndDate(dayDate);
          streaks.push(currentStreak);
        }
        prev = dayDate;
      });

      // print current streak
      streaks = new Streaks(streaks);
      streaks.printStreaks(null, false, true);
    }
  }
});
