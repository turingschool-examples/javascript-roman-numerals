assert = require('chai').assert;
convertToOldRoman = require('../roman-numerals').convertToOldRoman;
convertToNewRoman = require('../roman-numerals').convertToNewRoman;


describe("roman numerals converter functions", function(){
  it("converts a numeral into old roman numerals", function(){
    var expected1 = "IIII";
    var actual1 = convertToOldRoman(4)
    var expected2 = "VIIII";
    var actual2 = convertToOldRoman(9)
    var expected3 = "X";
    var actual3 = convertToOldRoman(10)
    assert.equal(expected1, actual1);
    assert.equal(expected2, actual2);
    assert.equal(expected3, actual3);
  })

  it("converts a numeral into new roman numerals", function(){
    var expected1 = "IV";
    var actual1 = convertToNewRoman(4)
    var expected2 = "IX";
    var actual2 = convertToNewRoman(9)
    var expected3 = "XIV";
    var actual3 = convertToNewRoman(14)
    var expected4 = "XLIV";
    var actual4 = convertToNewRoman(44)
    var expected5 = "XCIX";
    var actual5 = convertToNewRoman(99)
    assert.equal(expected1, actual1);
    assert.equal(expected2, actual2);
    assert.equal(expected3, actual3);
    assert.equal(expected4, actual4);
    assert.equal(expected5, actual5);
  })
})