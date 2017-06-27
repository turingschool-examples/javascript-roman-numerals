var pry = require('pryjs');

function convertToOldRoman(number){
  var roman = ""
  var temp = number
  var m = "M"
  var d = "D"
  var c = "C"
  var l = "L"
  var x = "X"
  var v = "V"
  var i = "I"
  // eval(pry.it)
  if(temp>1000){
    for(var j = 0; j<Math.floor(number/1000); j++){
      roman += m
    }
    temp -=  1000 * (Math.floor(temp/1000))
  }
  if(temp>500){
    for(var j = 0; j<Math.floor(temp/500); j++){
      roman += d
    }
    temp -= 500* (Math.floor(temp/500))
  }
  if(temp>100){
    for(var j = 0; j<Math.floor(temp/100); j++){
      roman += c
    }
    temp -= 100* (Math.floor(temp/100))
  }
  if(temp>50){
    for(var j = 0; j<Math.floor(temp/50); j++){
      roman += l
    }
    temp -= 50* (Math.floor(temp/50))
  }
  if(temp>10){
    for(var j = 0; j<Math.floor(temp/10); j++){
      roman += x
    }
    temp -= 10* (Math.floor(temp/10))
  }
  if(temp>5){
    for(var j = 0; j<Math.floor(temp/5); j++){
      roman += v
    }
    temp -= 5* (Math.floor(temp/5))
  }
  if(temp<5) {
    for(var j = 0; j<temp; j++){
      roman += i
    }
  }
  return roman
}
module.exports = convertToOldRoman