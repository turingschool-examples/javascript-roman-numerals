function convert(number) {
  let roman = "";
  while (number > 0) {
    if (number >= 50) {
      number -= 50;
      roman += "L";
    } else if (number >= 10) {
      number -= 10;
      roman += "X";
    } else if (number >= 5) {
      number -= 5;
      roman += "V";
    } else if (number >= 1) {
      number -= 1;
      roman += "I";
    };
  };
  return roman;
};

module.exports = {
  convert: convert
}
