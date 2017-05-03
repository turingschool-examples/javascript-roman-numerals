function convertToOldRoman (number) {
  var arabicNumbers = [1000, 500, 100, 50, 10, 5, 1];
  var romanNumbers = ["M", "D", "C", "L", "X", "V", "I"];
  var result = "";

  for(var i = 0; i <= arabicNumbers.length; i++){
    while(arabicNumbers[i] <= number) {
      result += romanNumbers[i];
      number -= arabicNumbers[i];
    }
  }
  return result;
};

module.exports = convertToOldRoman;
