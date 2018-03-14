

const convertToOldRoman = (number) => {
  var result = '';
  var numbers = [1000, 500, 100, 50, 10, 5, 1];
  var numerals = ["M", "D", "C", "L", "X", "V", "I"];
  for (var i = 0; i<= numbers.length; i++) {
    while (number % numbers[i] < number) {
      result += numerals[i];
      number -= numbers[i];
    }
  }
  return result;
}

const convertToModernRoman = (number) => {
  var result = '';
  
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0; i<=numbers.length; i++) {
    while (number % numbers[i] < number) {
      result += numerals[i];
      number -= numbers[i];
    }
  }
  return result;
}

module.exports = [
  convertToOldRoman, 
  convertToModernRoman];
