function convertToOldRoman(num) {
  var newNum = num
  var roman = ""
  var thousand = Math.floor(num/1000)
  if (thousand !== 0){
    newNum = newNum - (thousand * 1000)
    var string = "M"
    roman += string.repeat(thousand)
  }
  var fiveHundreds = Math.floor(newNum/500)
  if (fiveHundreds !== 0) {
    newNum = newNum - ( fiveHundreds * 500)
    var string = "D"
    roman += string.repeat(fiveHundreds)
  }
  var oneHundreds = Math.floor(newNum/100)
  if (oneHundreds !== 0) {
    newNum = newNum - ( oneHundreds * 100)
    var string = "C"
    roman += string.repeat(oneHundreds)
  }
  var fifty = Math.floor(newNum/50)
  if (fifty !== 0) {
    newNum = newNum - ( fifty * 50)
    var string = "L"
    roman += string.repeat(fifty)
  }
  var ten = Math.floor(newNum/10)
  if (ten !== 0) {
    newNum = newNum - ( ten * 10)
    var string = "X"
    roman += string.repeat(ten)
  }
  var five = Math.floor(newNum/5)
  if (five !== 0) {
    newNum = newNum - (five * 5)
    var string = "V"
    roman += string.repeat(five)
  }
  var one = Math.floor(newNum)
  if (five !== 0) {
    var string = "I"
    roman += string.repeat(one)
  }
  return roman
}

console.log(convertToOldRoman(2687))
