const assert = require('chai').assert
const romanNumeralFunctions = require('../romanNumerals')

describe("Roman Numeral Functions", function() {
  it("can convert whole integer to simple roman numeral", function (){
    assert.equal(romanNumeralFunctions.convertToOldRoman(3), "III");
    assert.equal(romanNumeralFunctions.convertToOldRoman(5), "V");
    assert.equal(romanNumeralFunctions.convertToOldRoman(13), "XIII");
    // assert.equal(romanNumeralFunctions.convertToOldRoman(53), "LIII");
    // assert.equal(romanNumeralFunctions.convertToOldRoman(103), "CIII");
    // assert.equal(romanNumeralFunctions.convertToOldRoman(553), "DLIII");
    // assert.equal(romanNumeralFunctions.convertToOldRoman(3000), "MIII");
  });
  it("cannot convert non-whole integer to roman numeral", function () {
    assert.equal(romanNumeralFunctions.convertToOldRoman(3.5), "Cannot Compute");
  });
  it("cannot convert non-numbers to roman numeral", function () {
    assert.equal(romanNumeralFunctions.convertToOldRoman("a"), "Cannot Compute");
    assert.equal(romanNumeralFunctions.convertToOldRoman(NaN), "Cannot Compute");
  })
})
