assert = require('chai').assert;
convertToOldRoman = require('../roman-numerals');

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
})