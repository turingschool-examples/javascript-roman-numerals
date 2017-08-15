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

module.exports = convertToOldRoman;