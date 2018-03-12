const pry = require('pryjs')

class Roman {
  constructor(){
    this.numerals = {
      "M": 1000,
      "D": 500,
      "C": 100,
      "L": 50,
      "X": 10,
      "V": 5,
      "I": 1
    }
  }

  convertToOldRoman(number){
  }

  quotient(number, divisor){
    return Math.floor(number / divisor)
  }

  remainder(number, divisor){
    return number % divisor
  }
}

module.exports = Roman
