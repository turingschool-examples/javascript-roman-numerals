pry = require('pryjs')

function convertToOldRoman(num) {
  numeral = []
  numeral.push('M'.repeat(Math.floor(num / 1000)))
  num = num % 1000
  numeral.push('D'.repeat(Math.floor(num / 500)))
  num = num % 500
  numeral.push('C'.repeat(Math.floor(num / 100)))
  num = num % 100
  numeral.push('L'.repeat(Math.floor(num / 50)))
  num = num % 50
  numeral.push('X'.repeat(Math.floor(num / 10)))
  num = num % 10
  numeral.push('V'.repeat(Math.floor(num / 5)))
  num = num % 5
  numeral.push('I'.repeat(Math.floor(num / 1)))
  num = num % 1
  return numeral.toString().replace(/ |,/g , "")
}

module.exports = convertToOldRoman
