function convertToOldRoman(num){
  var arabicNums = [1000, 500, 100, 50, 10, 5, 1]
  var romanNums = ["M","D","C","L","X", "V", "I"]
  var romanNumeral = ""

  for(i=0; i <= arabicNums.length; i++){
    while(arabicNums[i] <= num){
      romanNumeral += romanNums[i]
      num -= arabicNums[i]
    }
  }
  return romanNumeral
}

module.exports = convertToOldRoman
