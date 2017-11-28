assert = require('chai').assert;
convert = require('../lib/roman-numerals');

describe("Roman Numeral Converter", function() {
  context("convertToOldRoman", function() {
    it("converts and integer to old roman numerals", function() {
      assert.equal(convert(4), 'IIII');
      assert.equal(convert(25), 'XXV');
      assert.equal(convert(2385), 'MMCCCLXXXV');
    });
  });
});