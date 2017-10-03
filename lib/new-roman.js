const arabicToRoman = require('../lib/shared.js').arabicToRoman

const newRomanNumerals = {
  M: 1000,
  CMXLIV: 944,
  D: 500,
  CD: 400,
  C: 100,
  XCIX: 99,
  L: 50,
  XLIV: 44,
  XIV: 14,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

function convertToNewRoman(number) {
  if (number <= 0 || number > 3000) {
    return null;
  }
  return arabicToRoman(newRomanNumerals, number);
};

module.exports = convertToNewRoman
