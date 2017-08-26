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

function newRoman(number) {
  old = oldRoman(number)
  old = replaceNine(old)
  old = replaceFour(old)
  old = replaceNinety(old)
  old = replaceFourty(old)
  old = replaceNinehundred(old)
  old = replaceFourhundred(old)
  return old
}

function replaceNine(num) {
  if (num.includes('VIIII')) {
    return num.replace('VIIII', 'IX')
  }
  return num
}

function replaceFour(num) {
  if (num.includes('IIII')) {
    return num.replace('IIII', 'IV')
  }
  return num
}

function replaceNinety(num) {
  if (num.includes('LXXXX')) {
    return num.replace('LXXXX', 'XC')
  }
  return num
}

function replaceFourty(num) {
  if (num.includes('XXXX')) {
    return num.replace('XXXX', 'XL')
  }
  return num
}

function replaceNinehundred(num) {
  if (num.includes('DCCCC')) {
    return num.replace('DCCCC', 'CM')
  }
  return num
}

function replaceFourhundred(num) {
  if (num.includes('CCCC')) {
    return num.replace('CCCC', 'CD')
  }
  return num
}

module.exports = { 
  oldRoman,
  newRoman,
}
