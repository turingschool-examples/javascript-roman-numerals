var oldRomanNumerals = [
  ["1",	"I"]
  ["5",	"V"]
  ["10",	"X"]
  ["50",	"L"]
  ["100",	"C"]
  ["500",	"D"]
  ["1000",	"M"]
];

function convertToOldRoman(num) {
  for (var i = 0; i < oldRomanNumerals.lenght; i++) {
    if (num >= oldRomanNumerals[i][0]) {
      return oldRomanNumerals[i][1] + convertToOldRoman(num - oldRomanNumerals[i][0])
    }
  }
}
