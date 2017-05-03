pry = require('pryjs')

function convertToOldRoman(number){
  var key = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1},
      numeral = '', i;
  for ( i in key) {
    while (number >= key[i] ) {
      numeral += i;
      number -= key[i];
    }
  }
  console.log(numeral);
  return numeral;
}

function convertToNewRoman(number){
  var key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      numeral = '', i;
  for ( i in key) {
    while (number >= key[i] ) {
      numeral += i;
      number -= key[i];
    }
  }
  console.log(numeral);
  return numeral;
}

convertToOldRoman(499);
convertToNewRoman(499);

module.exports.convertToNewRoman = convertToNewRoman;
module.exports.convertToOldRoman = convertToOldRoman;
