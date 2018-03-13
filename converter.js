let num = 2914

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

num % 1000 // capture 2, fill array with 2 dictionary[1000] ---> MM
num = num - (2 * 1000)

num % 100 // catpure 9 but use if/else to see if it's 4 or 9
  if 1, 2, 3, fill array with 1, 2, or 3 Cs
  if 4, fill array with dictionary[400]
  if 5, fill array with dictionary[500]
  if 6, 7, 8, fill array with dictionary[500] AND 1, 2, 3 Cs
  if 9, fill array with dictionary[900]
  THEN num = num - (digit * 100)

  num % 10...