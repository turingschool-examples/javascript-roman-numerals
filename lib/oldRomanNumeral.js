pry = require('pryjs')
function toOldRomanNumeral(num) {
  var roman = ""
  const characters = { 1000: "M",
                   // 900: "CM",
                   500: "D",
                   400: "CD",
                   100: "C",
                   // 90: "XC",
                   50: "L",
                   40: "XL",
                   10: "X",
                   // 9: "IX",
                   5: "V",
                   // 4: "IV",
                   1: "I"
                  }

  Object.keys(characters).reverse().forEach(function(element) {
    while(num >= element) {
      num -= element;
      // eval(pry.it)
      roman += characters[element]
    }
  });
  return roman;
}

//
// def to_roman(num)
//     roman = "" # set an empty string to receive our roman numerals
//     roman_hashmap.keys.each do |key| # iterate over every key in the hashmap
//       while num >= key # loop while given num is greater than or equal to the key
//         num -= key # subtract key value from num to represent number minus inserted roman num
//         roman += roman_hashmap[key] # build string by adding the subtracted roman
//       end # loop has pushed all romans for first key, then goes back to top for next key
//     end # string has been built
//     roman # return string of romans
//   end


module.exports = toOldRomanNumeral;