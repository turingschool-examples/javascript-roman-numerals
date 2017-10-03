function arabicToRoman(romanNumerals, number) {
  let fullRoman = "";
  for (let hashKey in romanNumerals) {
    let arabicNumeral = romanNumerals[hashKey]
    let toRepeat = Math.trunc(number / arabicNumeral);
    fullRoman += hashKey.repeat(toRepeat);
    number -= arabicNumeral * toRepeat;
  }
  return fullRoman;
};

const oldRomanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

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

module.exports = {
                   arabicToRoman: arabicToRoman,
                   oldRomanNumerals: oldRomanNumerals,
                   newRomanNumerals: newRomanNumerals
                 }
