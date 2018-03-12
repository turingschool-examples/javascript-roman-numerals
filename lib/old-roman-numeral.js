convertToOldRoman = (number)  => {
  let romanNumber = ""
  while (number >= 1000) {
    number -= 1000
    romanNumber += "M"
  }
  while (number >= 500) {
    number -= 500
    romanNumber += "D"
  }
  while (number >= 100) {
    number -= 100
    romanNumber += "C"
  }
  while (number >= 50) {
    number -= 50
    romanNumber += "L"
  }
  while (number >= 10) {
    number -= 10
    romanNumber += "X"
  }
  while (number >= 5) {
    number -= 5
    romanNumber += "V"
  }
  while (number >= 1) {
    number -= 1
    romanNumber += "I"
  }
  return romanNumber
}




module.exports = {convertToOldRoman} 