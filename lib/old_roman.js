const key = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1
}

function convertToOldRoman(num) {
  let output = '';

  for (var letter in key) {
    if (key.hasOwnProperty(letter)) {
      let divided = num / key[letter]
      if (divided > 1) {
        output += letter.repeat(Math.floor(divided));
        num = num % key[letter];
      }
    };
  };

  return output;
};

module.exports = convertToOldRoman;
