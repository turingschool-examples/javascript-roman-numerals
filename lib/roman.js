const pry = require('pryjs')

class Roman {
  constructor(){
    this.numerals = {
      1000: "M",
      500: "D",
      100: "C",
      50: "L",
      10: "X",
      5: "V",
      1: "I"
    }
  }

  convertToOldRoman(number, oldRoman=""){
    for(var i=6;i>=0;i--){
      var divisor = Object.keys(this.numerals)[i]
      var quotient = this.findQuotient(number, divisor)
      var remainder = this.findRemainder(number, divisor)
      oldRoman += this.addToString(quotient, divisor)
      number = remainder
    }
    return oldRoman
  }

  addToString(quotient, divisor){
    let string = ""
    for(var i=1;i<=quotient;i++){
      string += this.numerals[divisor]
    }
    return string
  }

  findQuotient(number, divisor){
    return Math.floor(number / divisor)
  }

  findRemainder(number, divisor){
    return number % divisor
  }
}

module.exports = Roman
