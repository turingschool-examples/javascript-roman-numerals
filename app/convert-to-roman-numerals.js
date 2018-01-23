exports.convertToOldRoman = function(num) {
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
  
  console.log(finalNum);
}
