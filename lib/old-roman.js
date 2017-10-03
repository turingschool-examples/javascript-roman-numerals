const arabicToRoman = require('../lib/shared.js').arabicToRoman

const oldRomanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

function convertToOldRoman(number) {
  if (number === 0) {
    return null;
  }
  return arabicToRoman(oldRomanNumerals, number);
};

module.exports = convertToOldRoman
