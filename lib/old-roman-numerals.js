const oldRomanNumeral = (num) => {
  let romanNumeral = ""

  let ones = num % 10
  if (ones >= 5) {
    romanNumeral += "I".repeat(ones - 5)
    romanNumeral += "V"
  } else {
    romanNumeral += "I".repeat(ones)
  }

  let tens = num % 100
  if (tens >= 50) {
    romanNumeral += "X".repeat(Math.floor((tens - 50) / 10))
    romanNumeral += "L"
  } else if (tens >= 10) {
    romanNumeral += "X".repeat(Math.floor(tens / 10))
  }

  let hundreds = num % 1000
  if (hundreds >= 500) {
    romanNumeral += "C".repeat(Math.floor((hundreds - 500) / 100))
    romanNumeral += "D"
  } else if (hundreds >= 100) {
    romanNumeral += "C".repeat(Math.floor(hundreds / 100))
  }

  if (num >= 1000) {
    romanNumeral += "M".repeat(Math.floor(num / 1000))
  }
  return romanNumeral
}


module.exports = oldRomanNumeral
