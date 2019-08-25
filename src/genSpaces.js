// Generate c spaces
module.exports = function(c) {
  let string = '';
  for (const x = 1; x < c; x++) {
    string = string + ' ';
  }
  return string;
}
