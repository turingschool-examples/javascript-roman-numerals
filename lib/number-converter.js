module.exports = {
    convertToOldRoman: function convertToOldRoman(number) {
      var numberArray = Array.from(number.toString()).map(Number);
      while (numberArray.length != 4) {
        numberArray.unshift(0)
      }

      return fourDigits(numberArray)

      function fourDigits(numArray) {
        var first = numArray[0]
        var second = numArray[1]
        var third = numArray[2]
        var fourth = numArray[3]
        return 'M'.repeat(first) + threeDigits([second, third, fourth])
      }

      function threeDigits(numArray) {
        var first = numArray[0]
        var second = numArray[1]
        var third = numArray[2]
        if (first >= 5) {
          return 'D' + twoDigits([second, third])
        } else {
          return 'C'.repeat(first) + twoDigits([second, third])
          }
        }


      function twoDigits(numArray) {
        var first = numArray[0]
        var second = numArray[1]
        if (first >= 5) {
          return 'L' + 'X'.repeat(first % 5) + oneDigits(second)
        } else {
          return 'X'.repeat(first) + oneDigits(second)
          }
        }

      function oneDigits(number) {
        if (number >= 5) {
          return 'V' + 'I'.repeat(number % 5)
        } else {
          return 'I'.repeat(number % 5)
        }
      }
    },
}



  // | Arabic Number  | Roman Numeral |
  // | -------------- | ------------- |
  // | 1              | I             |
  // | 5              | V             |
  // | 10             | X             |
  // | 50             | L             |
  // | 100            | C             |
  // | 500            | D             |
  // | 1000           | M             |
