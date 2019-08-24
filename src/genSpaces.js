// Generate c spaces
module.exports = function(c) {
  var string = '';
  for (var x = 1; x < c; x++) {
    string = string + ' ';
  }
  return string;
}
