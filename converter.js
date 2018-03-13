let num = 2014

let dictionary = {
  1: "I",
  2: "II", 
  3: "III",
  4:"IIII",
  "4new": "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD"
  500: "D",
  900: "CM"
  1000: "M"
}



function convertToOldRoman(num) {

}



function convertToNewRoman(num) {
  //for or while
  
}





console.log(convertToOldRoman(4)) // "IIII"
console.log(convertToNewRoman(4)) // "IV"


// ex: 2914 ---> MMCMXIV

num % 1000 // capture 2, fill array with 2 1000s: MM
num = num - (2 * 1000)

num % 100 // catpure 9 but use if/else to see if it's 4 or 9
  if 1, 2, 3, fill array with 1, 2, or 3 I's
  if 4, fill array with 
