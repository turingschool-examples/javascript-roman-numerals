exports.convertToOldRoman = function(num) {
  if (num <= 0) {
    return "cannot convert a number less than or equal to zero";
  }
  else {
    var numArray = []

    var convertToNumArray = function(num) {
      if (num / 1000 >= 1) {
        numArray.push(1000);
        newNum = num - 1000;
        convertToNumArray(newNum);
      }
      else if (num / 500 >= 1) {
        numArray.push(500);
        newNum = num - 500;
        convertToNumArray(newNum);
      }
      else if (num / 100 >= 1) {
        numArray.push(100);
        newNum = num - 100;
        convertToNumArray(newNum);
      }
      else if (num / 50 >= 1) {
        numArray.push(50);
        newNum = num - 50;
        convertToNumArray(newNum);
      }
      else if (num / 10 >= 1) {
        numArray.push(10);
        newNum = num - 10;
        convertToNumArray(newNum);
      }
      else if (num / 5 >= 1) {
        numArray.push(5);
        newNum = num - 5;
        convertToNumArray(newNum);
      }
      else if (num / 1 >= 1) {
        numArray.push(1);
        newNum = num - 1;
        convertToNumArray(newNum);
      }
      return numArray;
    };
    convertToNumArray(num);

    var finalNum = numArray.reduce(function(final, num) {
      if (num === 1000) {
        return final + "M";
      }
      else if (num === 500) {
        return final + "D";
      }
      else if (num === 100) {
        return final + "C";
      }
      else if (num === 50) {
        return final + "L";
      }
      else if (num === 10) {
        return final + "X";
      }
      else if (num === 5) {
        return final + "V";
      }
      else {
        return final + "I"
      }
    }, "");

    return finalNum;
  }
}


exports.convertToNewRoman = function(num) {
  if (num <= 0) {
    return "cannot convert a number less than or equal to zero";
  }
  else {
    var numArray = []

    var convertToNumArray = function(num) {
      if (num / 1000 >= 1) {
        numArray.push(1000);
        newNum = num - 1000;
        convertToNumArray(newNum);
      }
      else if (num / 900 >= 1) {
        numArray.push(900);
        newNum = num - 900;
        convertToNumArray(newNum);
      }
      else if (num / 500 >= 1) {
        numArray.push(500);
        newNum = num - 500;
        convertToNumArray(newNum);
      }
      else if (num / 400 >= 1) {
        numArray.push(400);
        newNum = num - 400;
        convertToNumArray(newNum);
      }
      else if (num / 100 >= 1) {
        numArray.push(100);
        newNum = num - 100;
        convertToNumArray(newNum);
      }
      else if (num / 90 >= 1) {
        numArray.push(90);
        newNum = num - 90;
        convertToNumArray(newNum);
      }
      else if (num / 50 >= 1) {
        numArray.push(50);
        newNum = num - 50;
        convertToNumArray(newNum);
      }
      else if (num / 40 >= 1) {
        numArray.push(40);
        newNum = num - 40;
        convertToNumArray(newNum);
      }
      else if (num / 10 >= 1) {
        numArray.push(10);
        newNum = num - 10;
        convertToNumArray(newNum);
      }
      else if (num / 9 >= 1) {
        numArray.push(9);
        newNum = num - 9;
        convertToNumArray(newNum);
      }
      else if (num / 5 >= 1) {
        numArray.push(5);
        newNum = num - 5;
        convertToNumArray(newNum);
      }
      else if (num / 4 >= 1) {
        numArray.push(4);
        newNum = num - 4;
        convertToNumArray(newNum);
      }
      else if (num / 1 >= 1) {
        numArray.push(1);
        newNum = num - 1;
        convertToNumArray(newNum);
      }
      return numArray;
    };
    convertToNumArray(num);

    var finalNum = numArray.reduce(function(final, num) {
      if (num === 1000) {
        return final + "M";
      }
      else if (num === 900) {
        return final + "CM"
      }
      else if (num === 500) {
        return final + "D";
      }
      else if (num === 400) {
        return final + "CD"
      }
      else if (num === 100) {
        return final + "C";
      }
      else if (num === 90) {
        return final + "XC"
      }
      else if (num === 50) {
        return final + "L";
      }
      else if (num === 40) {
        return final + "XL";
      }
      else if (num === 10) {
        return final + "X";
      }
      else if (num === 9) {
        return final + "IX"
      }
      else if (num === 5) {
        return final + "V";
      }
      else if (num === 4) {
        return final + "IV";
      }
      else {
        return final + "I"
      }
    }, "");

    return finalNum;
  }
}
