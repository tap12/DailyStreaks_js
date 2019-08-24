var fs = require('fs');
var DayDate = require('../src/DayDate');
var Streak = require('../src/Streak');

var CounterBar = require('../src/CounterBar');
var DaysBar = require('../src/DaysBar.js');
var DayDate = require('../src/DayDate.js');


var habits = [];

console.log('\x1B[37;1;4mLast 7 Days\x1B[0m');

fs.readFile('./data.txt', 'utf-8', function(e, d) {
  habits = d.split(/\n/);


  var done = [];

  var dates = {};

  for (var i = 0; i < habits.length; i++) {
    if (!done.includes(habits[i].substring(0, habits[i].indexOf(',')))) {
      done = done.concat([habits[i].substring(0, habits[i].indexOf(','))])
      name = habits[i].substring(0, habits[i].indexOf(','));

      for (var j = 0; j < habits.length; j++) {
        if (habits[j].startsWith(name)) {
          if (!dates[name]) {
            dates[name] = [];
          }
          dates[name] = dates[name].concat([new DayDate(habits[j].substring(habits[j].indexOf(',')))]);
        }
      }

      var howManyDays = 0;
      var today = DayDate.today();
      var sixDaysAgo = today.subtractDays(6);
      var daysBar = new DaysBar(sixDaysAgo, today);

      var currentDayDate = sixDaysAgo;

      console.log('\x1B[37;1m' + name + '\x1B[0m: ');

      while (currentDayDate.toString() <= today.toString()) {
        if (dates[name].find(date => date.toString().replace(',', '') == currentDayDate.toString())) {
          daysBar.addDayDate(currentDayDate, true);
        } else {
          if (currentDayDate.toString() != today.toString()) {
            daysBar.addDayDate(currentDayDate, false);
          }
        }
        currentDayDate = currentDayDate.getNext();
      }

      daysBar.printBar();

    }
  }
  // console.log('dates', dates);
});
