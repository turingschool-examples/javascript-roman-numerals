const assert = require('chai').assert
const romanNumerals = require('../romanNumerals')

describe("old conversion", function(){
  it("returns old numerals", function(){
    var num1 = 12
    var num2 = 499
    assert.equal(romanNumerals.convertToOldRoman(num1), "XII")
    assert.equal(romanNumerals.convertToOldRoman(num2), "CCCCLXXXXVIIII")
  });
});

describe("new conversion", function(){
  it("returns new numerals", function(){
    var num1 = 12
    var num2 = 499
    assert.equal(romanNumerals.convertToNewRoman(num1), "XII")
    assert.equal(romanNumerals.convertToNewRoman(num2), "CDXCIX")
  });
});
