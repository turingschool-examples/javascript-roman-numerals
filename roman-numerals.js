var pry = require('pryjs');

function convertToOldRoman(num){
  var currentNum = num;
  var result = "";
  result += Array(Math.floor(currentNum/1000) + 1).join("M");
  currentNum = currentNum % 1000;
  result += Array(Math.floor(currentNum/500) + 1).join("D");
  currentNum = currentNum % 500;
  result += Array(Math.floor(currentNum/100) + 1).join("C");
  currentNum = currentNum % 100;
  result += Array(Math.floor(currentNum/50) + 1).join("L");
  currentNum = currentNum % 50;
  result += Array(Math.floor(currentNum/10) + 1).join("X");
  currentNum = currentNum % 10;
  result += Array(Math.floor(currentNum/5) + 1).join("V");
  currentNum = currentNum % 5;
  result += Array(Math.floor(currentNum/1) + 1).join("I");
  return result;
}

function convertToNewRoman(num) {
  oldRoman = convertToOldRoman(num)
  oldRoman = replaceNines(oldRoman);
  oldRoman = replaceFours(oldRoman);
  oldRoman = replaceNineties(oldRoman);
  oldRoman = replaceForties(oldRoman);
  return oldRoman;
}

function replaceNines(old) {
  if (old.includes("VIIII")) {
    return old.replace("VIIII", "IX");
  };
  return old;
}

function replaceFours(old) {
  if (old.includes("IIII")) {
    return old.replace("IIII", "IV");
  };
  return old;
}

function replaceForties(old) {
  if (old.includes("XXXX")) {
    return old.replace("XXXX", "XL");
  };
  return old;
}

function replaceNineties(old) {
  if (old.includes("LXXXX")) {
    return old.replace("LXXXX", "XC");
  };
  return old;
}

module.exports = {
                  convertToOldRoman,
                  convertToNewRoman
                  };