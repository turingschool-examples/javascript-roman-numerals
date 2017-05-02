function convertToNewRoman(num){
  var arabicNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4 ,1]
  var romanNums = ["M","CM","D", "CD","C", "XC","L","XL","X", "IX","V", "IV" ,"I"]
  var romanNumeral = ""

  for(i=0; i <= arabicNums.length; i++){
    while(arabicNums[i] <= num){
      romanNumeral += romanNums[i]
      num -= arabicNums[i]
    }
  }
  return romanNumeral
}

module.exports = convertToNewRoman
