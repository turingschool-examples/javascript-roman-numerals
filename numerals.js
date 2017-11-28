function letters(number, symbol){
  rom_str = ''
  for(var i = 0; i < number; i ++){
    rom_str += symbol
  }
  return rom_str
}

function digit(input, pow_10, symbols){
  // console.log(input);
  // console.log(pow_10);
  // console.log(symbols);
  rom_str = '';
  int_str = input.toString();
  one_dig_str = int_str[int_str.length - (pow_10 + 1)];
  position = parseInt(one_dig_str);
  if(position < 5){
    if(position < 4){
      rom_str += (letters(position, symbols[0]))
    } else {
      rom_str += (symbols[0])
      rom_str += (symbols[1])
    }
  } else {
    rom_str = symbols[1]
    if(position < 9){
      rom_str += (letters((position - 5), symbols[0]))
    }
    else{
      rom_str = symbols[0]
      rom_str += (symbols[2])
    }
  }
  return rom_str
}

function toRoman(input){
  num_str = ""
  if(input >= 1000){
    num_str += (digit(input, 3, ["M", "|ↃↃ", "CC|ↃↃ"]))
  }
  if(input >= 100){
    num_str += (digit(input, 2, ["C", "D", "M"]))
  }
  if(input >= 10) {
    num_str += (digit(input, 1, ["X", "L", "C"]))
  }
  num_str += (digit(input, 0, ["I", "V", "X"]))
  return num_str
}

for(i = 1; i < 100000; i ++){
  console.log(toRoman(i))
}