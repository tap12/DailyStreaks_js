const fs = require('fs');
const DayDate = require('../src/DayDate');
const DaysBar = require('../src/DaysBar.js');


const habits = [];

console.log('\x1B[37;1;4mLast 7 Days\x1B[0m');

fs.readFile('./data.txt', 'utf-8', (e, d) => {
  habits = d.split(/\n/);


  let done = [];

  const dates = {};

  for (let i = 0; i < habits.length; i += 1) {
    if (!done.includes(habits[i].substring(0, habits[i].indexOf(',')))) {
      done = done.concat([habits[i].substring(0, habits[i].indexOf(','))])
      const name = habits[i].substring(0, habits[i].indexOf(','));

      for (const j = 0; j < habits.length; j += 1) {
        if (habits[j].startsWith(name)) {
          if (!dates[name]) {
            dates[name] = [];
          }
          dates[name] = dates[name].concat([new DayDate(habits[j].substring(habits[j].indexOf(',')))]);
        }
      }


      const today = DayDate.today();
      const sixDaysAgo = today.subtractDays(6);
      const daysBar = new DaysBar(sixDaysAgo, today);

      const currentDayDate = sixDaysAgo;

      console.log(`\x1B[37;1m' + name + '\x1B[0m: `); // eslint-disable-line no-console

      function abc(date, currentDayDate) {
        return date.toString().replace(',', '') === currentDayDate.toString());
      }

      while (currentDayDate.toString() <= today.toString()) {
        if (dates[name].find(date => date.toString().replace(',', '') === currentDayDate.toString())) {
          daysBar.addDayDate(currentDayDate, true);
        } else if (currentDayDate.toString() != today.toString()) {
            daysBar.addDayDate(currentDayDate, false);
        }
        currentDayDate = currentDayDate.getNext();
      }

      daysBar.printBar();

    }
  }
  // console.log('dates', dates);
});
