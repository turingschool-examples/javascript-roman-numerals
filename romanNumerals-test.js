const assert = require('chai').assert;
const romanNumerals = require('../lib/romanNumerals.js')

describe('Roman Numeral functionality', function(){
  it('convertToOldRoman converts number to new roman numerals', function(){
    assert.equal(romanNumerals.convertToOldRoman(4), "IIII");
    assert.equal(romanNumerals.convertToOldRoman(5), "V");
    assert.equal(romanNumerals.convertToOldRoman(7), "VII");
    assert.equal(romanNumerals.convertToOldRoman(102), "CII");
  });

  it('convertToNewRoman converts number to new roman numerals', function(){
    assert.equal(romanNumerals.convertToNewRoman(4), "IV");
    assert.equal(romanNumerals.convertToNewRoman(9), "IX");
    assert.equal(romanNumerals.convertToNewRoman(14), "XIV");
    assert.equal(romanNumerals.convertToNewRoman(44), "XLIV");
    assert.equal(romanNumerals.convertToNewRoman(99), "XCIX");
    assert.equal(romanNumerals.convertToNewRoman(400), "CD");
    assert.equal(romanNumerals.convertToNewRoman(944), "CMXLIV");
  });
});
