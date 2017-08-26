function oldRoman(number) {
  var result = ''

  if(number>=1000){
    for(var i = 0; i<Math.floor(number/1000); i++){
      result += 'M'
    }
    number -=  1000 * (Math.floor(number/1000))
  }
  if(number>=500){
    for(var i = 0; i<Math.floor(number/500); i++){
      result += 'D'
    }
    number -= 500* (Math.floor(number/500))
  }
  if(number>=100){
    for(var i = 0; i<Math.floor(number/100); i++){
      result += 'C'
    }
    number -= 100* (Math.floor(number/100))
  }
  if(number>=50){
    for(var i = 0; i<Math.floor(number/50); i++){
      result += 'L'
    }
    number -= 50* (Math.floor(number/50))
  }
  if(number>=10){
    for(var i = 0; i<Math.floor(number/10); i++){
      result += 'X'
    }
    number -= 10* (Math.floor(number/10))
  }
  if(number>=5){
    for(var i = 0; i<Math.floor(number/5); i++){
      result += 'V'
    }
    number -= 5* (Math.floor(number/5))
  }
  if(number<5) {
    for(var i = 0; i<number; i++){
      result += 'I'
    }
  }
  return result
}

module.exports = { 
  oldRoman,
}
