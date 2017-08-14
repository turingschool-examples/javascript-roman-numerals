const intervals = [1000, 500, 100, 50, 10, 5]

const OldRoman = {
  1000: 'M',
  500: 'D',
  100: 'C',
  50: 'L',
  10: 'X',
  5: 'V'
}

const convertToOldRoman = (num) => {
  roman = ''
  intervals.forEach( (interval) => {
    if (num / interval > 0) {
      roman += OldRoman[interval].repeat(Math.floor(num / interval))
      num = num % interval
    }
  })

  roman += "I".repeat(num)

  return roman
}

module.exports = convertToOldRoman
