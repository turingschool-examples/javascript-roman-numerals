const convertToOldRoman = (num) => {
  roman = ''
  if (num / 1000 > 0) {
    roman += "M".repeat(Math.floor(num / 1000))
    num = num % 1000
  }

  if (num / 500 > 0) {
    roman += "D".repeat(Math.floor(num / 500))
    num = num % 500
  }

  if (num / 100 > 0) {
    roman += "C".repeat(Math.floor(num / 100))
    num = num % 100
  }

  if (num / 50 > 0) {
    roman += "L".repeat(Math.floor(num / 50))
    num = num % 50
  }

  if (num / 10 > 0) {
    roman += "X".repeat(Math.floor(num / 10))
    num = num % 10
  }

  if (num / 5 > 0) {
    roman += "V".repeat(Math.floor(num / 5))
    num = num % 5
  }

  roman += "I".repeat(num)

  return roman
}

module.exports = convertToOldRoman
