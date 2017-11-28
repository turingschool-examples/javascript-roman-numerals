function convertToOldRoman(int) {
  var arabic = [1000, 500, 100, 50, 10, 5, 1];
  var roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  output = "";
  for(var i = 0; i <= roman.length; i++) {
    while(int % arabic[i] < int) {
      output += roman[i];
      int -= arabic[i];
    }
  }
  return output;
}

module.exports = convertToOldRoman;

// Arabic   Roman Numeral
// 1          I
// 5          V
// 10         X
// 50          L
// 100         C
// 500        D
// 1000        M

// 2385
