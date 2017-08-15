let oldValues = {
  1000: 'M',
  500 : 'D',
  100 : 'C',
  50  : 'L',
  10  : 'X',
  5   : 'V',
  1   : 'I'
}

let newValues = {
  4:	 'IV',
  9:	 'IX',
  40:	 'XL',
  90:	 'XC',
  400: 'CD',
  900: 'CM'
}

let allValues = Object.assign({}, oldValues, newValues);

function oldRoman(number) {
  let romanNumerals = ''

  while (number > 0) {
    Object.keys(oldValues)
          .sort((a,b) => { return b - a })
          .forEach((key) => {
            while (number % key !== number) {
              romanNumerals += oldValues[key]
              number -= key
            }
          })
  }
  return romanNumerals
}

function newRoman(number) {
  let romanNumerals = ''

  while (number > 0) {
    Object.keys(allValues)
          .sort((a,b) => { return b - a })
          .forEach((key) => {
            while (number % key !== number) {
              romanNumerals += allValues[key]
              number -= key
            }
          })
  }
  return romanNumerals
}

var exports = module.exports = { oldRoman, newRoman }