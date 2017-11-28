function convertToOldRoman(num) {
  var newNum = num
  var roman = ""
  var array = [{number: 1000, symbol: "M"},
              {number: 500, symbol: "D"},
              {number: 100, symbol: "C"},
              {number: 50, symbol: "L"},
              {number: 10, symbol: "X"},
              {number: 5, symbol: "V"},
              {number: 1, symbol: "I"}]

  array.forEach(function (placeValue) {
    var temp = Math.floor(newNum/placeValue.number)
    if (temp !== 0) {
      newNum = newNum - (temp * placeValue.number)
      var string = placeValue.symbol
      roman += string.repeat(temp)
    }
  })
  return roman
}

module.exports = convertToOldRoman
