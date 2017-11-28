function toNewRomanNumeral(num) {
  var roman = ""
  const characters = { 1000: "M",
                   900: "CM",
                   500: "D",
                   400: "CD",
                   100: "C",
                   90: "XC",
                   50: "L",
                   40: "XL",
                   10: "X",
                   9: "IX",
                   5: "V",
                   4: "IV",
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

module.exports = toNewRomanNumeral;