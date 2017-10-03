var pry = require('pryjs')

function convertToOldRoman(number) {
  toPrint = ""
  var arr = ('' + number).split('')
  length = arr.length

  arr.forEach (function (num) {
    var zeroes = length - (arr.indexOf(num) + 1)
    // eval(pry.it);
    if ((zeroes == 0) && (num % 5 != 0)) {
      toPrint += "I".repeat(num)
    } else if ((zeroes == 0) && (num % 5 == 0) && (num % 10 != 0)) {
      toPrint += "V"
    } else if ((zeroes == 1) && (num % 10 == 0)) {
      toPrint += "X"
    } else if ((zeroes == 1) && (num % 50 == 0)) {
      toPrint += "L"
    } else if ((zeroes == 2) && (num % 100 == 0)) {
      toPrint += "C"
    } else if ((zeroes == 2) && (num % 500 == 0)) {
      toPrint += "D"
    } else if (zeroes == 3) {
      toPrint += "M"
    }
  })
  return toPrint;
}

module.exports = convertToOldRoman
