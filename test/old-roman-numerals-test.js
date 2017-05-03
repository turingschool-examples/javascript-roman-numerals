const convertToOldRoman = require('../lib/old-roman-numerals')
const convertToNewRoman = require('../lib/new-roman-numerals')
const assert = require('chai').assert;

describe("convertToOldRoman", function() {
  it("converts a number into a Roman Number string", function() {
    assert.equal(convertToOldRoman(4), 'IIII');
    assert.equal(convertToOldRoman(2500), 'MMD');
    assert.equal(convertToOldRoman(436), 'CCCCXXXVI');
    assert.equal(convertToOldRoman(22), 'XXII');
    assert.equal(convertToOldRoman(139), 'CXXXVIIII');
  });
});

describe("convertToNewRoman", function() {
  it("converts a number into a New Roman Number string", function() {
    assert.equal(convertToNewRoman(4), 'IV');
    assert.equal(convertToNewRoman(9), 'IX');
    assert.equal(convertToNewRoman(14), 'XIV');
    assert.equal(convertToNewRoman(44), 'XLIV');
    assert.equal(convertToNewRoman(99), 'XCIX');
    assert.equal(convertToNewRoman(400), 'CD');
    assert.equal(convertToNewRoman(944), 'CMXLIV');
  });
});
