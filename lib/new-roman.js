const arabicToRoman = require('../lib/shared.js').arabicToRoman
const newRomanNumerals = require('../lib/shared.js').newRomanNumerals

function convertToNewRoman(number) {
  if (number === 0) {
    return null;
  }
  return arabicToRoman(newRomanNumerals, number);
};

module.exports = convertToNewRoman
