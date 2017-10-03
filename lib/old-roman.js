const arabicToRoman = require('../lib/shared.js').arabicToRoman
const oldRomanNumerals = require('../lib/shared.js').oldRomanNumerals

function convertToOldRoman(number) {
  if (number === 0) {
    return null;
  }
  return arabicToRoman(oldRomanNumerals, number);
};

module.exports = convertToOldRoman
