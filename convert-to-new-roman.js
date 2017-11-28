var pry = require('pryjs');

function convertToNewRoman(number){
  converted = "";
  numberM = Math.floor(number / 1000);
  number = number % 1000;
  numberD = Math.floor(number/500);
  number = number % 500;
  numberC = Math.floor(number/100);
  number = number % 100;
  numberL = Math.floor(number/50);
  number = number % 50;
  numberX = Math.floor(number/10);
  number = number % 10;
  numberV = Math.floor(number/5);
  number = number % 5;
  numberI = Math.floor(number/1);
  eval(pry.it)
  converted += addLetter(numberM, 'M')
  converted += addLetter(numberC, 'C')
  converted += addLetter(numberL, 'L')
  converted += addLetter(numberX, 'X')
  converted += addLetter(numberV, 'V')
  converted += addLetter(numberI, 'I')
}

function addLetter(number, letter) {
  var letters = "";
  for (var i = 0; i < number; i++) {
    letters += letter;
  }
  return letters;
}

module.exports = convertToNewRoman;
