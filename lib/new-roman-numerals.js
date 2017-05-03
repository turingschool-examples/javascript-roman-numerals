function convertToNewRoman (number) {
  var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var result = "";

  for(var i = 0; i <= arabicNumbers.length; i++){
    while(arabicNumbers[i] <= number) {
      result += romanNumbers[i];
      number -= arabicNumbers[i];
    }
  }
  return result;
};

module.exports = convertToNewRoman;
