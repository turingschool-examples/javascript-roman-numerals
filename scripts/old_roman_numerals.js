var pry = require('pryjs')

function convertToOldRoman(integer){
  var finalRoman = ""

  var round
  var remaining

  if (integer < 5) {
    for(i = 1; i <= integer; i++) {
      finalRoman += "I"
    };
  } else if (integer >= 5 && integer < 10) {
    round = Math.floor(integer / 5)
    remaining = integer % 5
    for(i = 1; i <= round; i++) {
      finalRoman += "V"
    }
    finalRoman += convertToOldRoman(remaining)
  } else if (integer >= 10 && integer < 50){
    round = Math.floor(integer / 10)
    remaining = integer % 10
    for(i = 1; i <= round; i++) {
      finalRoman += "X"
    }
    finalRoman += convertToOldRoman(remaining)
  } else if (integer >= 50 && integer < 100){
    round = Math.floor(integer / 50)
    remaining = integer % 50
    for(i = 1; i <= round; i++) {
      finalRoman += "L"
    }
    finalRoman += convertToOldRoman(remaining)
  } else if (integer >= 100 && integer < 500){
    round = Math.floor(integer / 100)
    remaining = integer % 100
    for(i = 1; i <= round; i++) {
      finalRoman += "C"
    }
    finalRoman += convertToOldRoman(remaining)
  } else if (integer >= 500 && integer < 1000){
    round = Math.floor(integer / 500)
    remaining = integer % 500
    for(i = 1; i <= round; i++) {
      finalRoman += "D"
    }
    finalRoman += convertToOldRoman(remaining)
  } else if (integer >= 1000 && integer <= 3000){
    round = Math.floor(integer / 1000)
    remaining = integer % 1000
    for(i = 1; i <= round; i++) {
    finalRoman += "M"
  }
  finalRoman += convertToOldRoman(remaining)
}
  return finalRoman
};

module.exports = {convertToOldRoman}
