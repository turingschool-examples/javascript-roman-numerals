function toOldRomanNumeral(num) {
  var roman = ""
  const characters = { 1000: "M",
                   500: "D",
                   100: "C",
                   50: "L",
                   10: "X",
                   5: "V",
                   1: "I"
                  }

  Object.keys(characters).reverse().forEach(function(element) {
    while(num >= element) {
      num -= element;
      roman += characters[element]
    }
  });
  return roman;
}

module.exports = toOldRomanNumeral;