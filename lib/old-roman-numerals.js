const pry = require('pryjs');

function oldRomanNumerals(number) {
  let str = number.toString();
  let arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    convertNumber(i, arr[i]);
  };
};

function convertNumber(index, number) {
  var count = '';

};
// switch(index) {
//   case index == 0:
//   switch(number) {
//     case number == 1: return 'I';
//     break;
//     case number == 2: return 'II';
//     break;
//     case number == 3: return 'III';
//     break;
//     case number == 4: return 'IIII';
//     break;
//     case number == 5: return 'V';
//     break;
//     case number == 6: return 'VI';
//     break;
//     case number == 7: return 'VII';
//     break;
//     case number == 8: return 'VIII';
