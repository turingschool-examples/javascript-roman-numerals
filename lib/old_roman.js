function oldRoman(num) {
  let result = '';
  let mNum = Math.floor(num / 1000);
  for (let i = 0; i < mNum; i++) {
    result += 'M';
    num -= 1000;
  }
  let dNum = Math.floor(num / 500);
  for (let i = 0; i < dNum; i++) {
    result += 'D';
    num -= 500;
  }
  let cNum = Math.floor(num / 100);
  for (let i = 0; i < cNum; i++) {
    result += 'C';
    num -= 100;
  }
  let lNum = Math.floor(num / 50);
  for (let i = 0; i < lNum; i++) {
    result += 'L';
    num -= 50;
  }
  let xNum = Math.floor(num / 10);
  for (let i = 0; i < xNum; i++) {
    result += 'X';
    num -= 10;
  }
  let vNum = Math.floor(num / 5);
  for (let i = 0; i < vNum; i++) {
    result += 'V';
    num -= 5;
  }
  for (let i = 0; i < num; i++) {
    result += 'I';
  }
  return result;
}

function newRoman(num) {
  let result = '';
  let dictionary = {'M': 1000,
                    'CM': 900,
                    'D': 500,
                    'CD': 400,
                    'C': 100,
                    'XC': 90,
                    'L': 50,
                    'XL': 40,
                    'X': 10,
                    'IX': 9,
                    'V': 5,
                    'IV': 4,
                    'I': 1};

  for (let letter in dictionary) {
    while (num >= dictionary[letter]) {
      result += letter;
      num -= dictionary[letter];
    }
  }
  return result;
}

exports.oldRoman = oldRoman;
exports.newRoman = newRoman;
