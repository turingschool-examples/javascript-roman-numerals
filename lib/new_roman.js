pry = require('pryjs')

function convertToNewRoman(num) {
  var arabic = [1000, 500, 100, 50, 10, 5, 1]
  var roman = ['M','D','C','L','X','V','I']
  var numeral = []
  for(i = 0; i < 7; i++) {
    if (Math.floor(num / arabic[i])  {
      numeral.push((roman[i]).repeat(Math.floor(num / arabic[i])))
    } else if () {
    } else
    numeral.push((roman[i]).repeat(Math.floor(num / arabic[i])))
    num = num % arabic[i]
  }
  return numeral.toString().replace(/ |,/g , "")
}

module.exports = convertToNewRoman
