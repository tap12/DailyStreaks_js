module.exports = class DayDate {
  constructor(string) {
    this.date = string;
  }

  subtractDays(numberOfDays) {
    const d = new Date(this.date);
    d.setDate(d.getDate() - numberOfDays);
    const mon = `${d.getMonth() + 1}`;
    if (d.getMonth() < 10) mon = '0' + mon;
    const day = d.getDate();
    if (d.getDate() < 10) day = '0' + day;
    return new DayDate(`${d.getFullYear()}-${mon}-${day}`);
  }

  static today() {
    const d = new Date();
    const mon = `${d.getMonth() + 1}`;
    if (d.getMonth() < 10) mon = '0' + mon;
    const day = d.getDate();
    if (d.getDate() < 10) day = '0' + day;
    return new DayDate(`${d.getFullYear()}-${mon}-${day}`);
  }

  getNext() {
    const d = new Date(this.date);
    d.setDate(d.getDate() + 1);
    const mon = `${d.getMonth() + 1}`;
    if (d.getMonth() < 10) mon = '0' + mon;
    const day = d.getDate();
    if (d.getDate() < 10) day = '0' + day;
    return new DayDate(`${d.getFullYear()}-${mon}-${day}`);
  }

  toString() {
    return this.date;
  }
}
