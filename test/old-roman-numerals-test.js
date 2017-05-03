const convertToOldRoman = require('../lib/old-roman-numerals')
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
