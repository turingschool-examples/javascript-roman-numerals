module.exports = {convertToOldRoman, convertToNewRoman}

function convertToNewRoman(num){
  var roman = ""
  while(num >= 900){
    if(num < 1000){
      roman += "CM";
      num -= 900
    } else {
      num -= 1000
      roman += "M"
    }
  }
  while(num >= 400){
    if(num < 500){
      roman += "CD";
      num -= 400
    } else {
      num -= 500
      roman += "D"
    }
  }
  while(num >= 90){
    if(num < 100){
      roman += "XC";
      num -= 90
    } else {
      num -= 100
      roman += "C"
    }
  }
  while(num >= 40){
    if(num < 50){
      roman += "XL";
      num -= 40
    } else {
      num -= 50
      roman += "L"
    }
  }
  while(num >= 9){
    if(num === 9){roman += "I"}
    num -= 10
    roman += "X"
  }
  while(num >= 4){
    if(num === 4){roman += "I"}
    num -= 5
    roman += "V"
  }
  while(num >= 1){
    num -= 1
    roman += "I"
  }
  return roman
}

function convertToOldRoman(num){
  var roman = ""
  while(num >= 1000){
    num -= 1000
    roman += "M"
  }
  while(num >= 500){
    num -= 500
    roman += "D"
  }
  while(num >= 100){
    num -= 100
    roman += "C"
  }
  while(num >= 50){
    num -= 50
    roman += "L"
  }
  while(num >= 10){
    num -= 10
    roman += "X"
  }
  while(num >= 5){
    num -= 5
    roman += "V"
  }
  while(num >= 1){
    num -= 1
    roman += "I"
  }
  return roman
}
