const oldRomanNumeral = (num) => {
  let romanNumeral = ""

  if (num >= 1000) {
    romanNumeral += "M".repeat(Math.floor(num / 1000))
  }
  
  let hundreds = num % 1000
  if (hundreds >= 500) {
    romanNumeral += "D"
    romanNumeral += "C".repeat(Math.floor((hundreds - 500) / 100))
  } else if (hundreds >= 100) {
    romanNumeral += "C".repeat(Math.floor(hundreds / 100))
  }

  let tens = num % 100
  if (tens >= 50) {
    romanNumeral += "L"
    romanNumeral += "X".repeat(Math.floor((tens - 50) / 10))
  } else if (tens >= 10) {
    romanNumeral += "X".repeat(Math.floor(tens / 10))
  }

  let ones = num % 10
  if (ones >= 5) {
    romanNumeral += "V"
    romanNumeral += "I".repeat(ones - 5)
  } else {
    romanNumeral += "I".repeat(ones)
  }
  return romanNumeral
}


module.exports = oldRomanNumeral
