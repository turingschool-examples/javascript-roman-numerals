pry = require('pryjs');

function convertToNewRoman(number){
  var num = number.toString().split("");
  if(num.length == 4){

  }else if(num.length == 3){

  }else if(num.length == 2){

  }else if(num.length == 1){

  }else{
    return "can't convert this number, too large for my units"
  }
  eval(pry.it)
};

var thousandsNumberConverter = {
  "1" = "I",
  "5" = "V",
  "10" = "X",
  "50" = "L",
  "100" = "C",
  "500" = "D",
  "1000" = "M"
}

convertToNewRoman(400);
