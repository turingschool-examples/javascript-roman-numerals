const modRomanNumeral = (num) => {
  let romanNumeral = ""

  if (num >= 1000) {
    romanNumeral += "M".repeat(Math.floor(num / 1000))
  }

  let hundreds = num % 1000
  if (hundreds >= 900) {
    romanNumeral += "CM"
  } else if (hundreds >= 500) {
    romanNumeral += "D"
    romanNumeral += "C".repeat(Math.floor((hundreds - 500) / 100))
  } else if (hundreds >= 400) {
    romanNumeral += "CD"
  } else if (hundreds >= 100) {
    romanNumeral += "C".repeat(Math.floor(hundreds / 100))
  }

  let tens = num % 100
  if (tens >= 90) {
    romanNumeral += "XC"
  } else if (tens >= 50) {
    romanNumeral += "L"
    romanNumeral += "X".repeat(Math.floor((tens - 50) / 10))
  } else if (tens >= 40) {
    romanNumeral += "XL"
  } else if (tens >= 10) {
    romanNumeral += "X".repeat(Math.floor(tens / 10))
  }

  let ones = num % 10
  if (ones >= 9) {
    romanNumeral += "IX"
  } else if (ones >= 5) {
    romanNumeral += "V"
    romanNumeral += "I".repeat(ones - 5)
  } else if (ones === 4) {
    romanNumeral += "IV"
  } else {
    romanNumeral += "I".repeat(ones)
  }
  return romanNumeral
}


module.exports = modRomanNumeral
