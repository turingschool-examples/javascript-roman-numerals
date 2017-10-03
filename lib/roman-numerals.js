var pry = require('pryjs');

module.exports = {convertToOldRoman}

function convertToOldRoman(number) {
  if (number == 10) {
    return "X"
  } else if (number % 5 == 0) {
    return "V"
  }
};
