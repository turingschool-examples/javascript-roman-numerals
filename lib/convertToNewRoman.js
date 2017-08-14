const intervals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4]

const NewRoman = {
  1000 : "M",
  900  : "CM",
  500  : "D",
  400  : "CD",
  100  : "C",
  90   : "XC",
  50   : "L",
  40   : "XL",
  10   : "X",
  9    : "IX",
  5    : "V",
  4    : "IV",
}

const convertToNewRoman = (num) => {
  roman = ''
  intervals.forEach( (interval) => {
    if (num / interval > 0) {
      roman += NewRoman[interval].repeat(Math.floor(num / interval))
      num = num % interval
    }
  })

  roman += "I".repeat(num)

  return roman
}

module.exports = convertToNewRoman
