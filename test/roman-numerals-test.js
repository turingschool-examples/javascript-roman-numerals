const assert = require('chai').assert
const romanNumerals = require('../lib/roman-numerals')

describe("Roman numerals", function() {
  it("returns the Roman numeral for a number", function() {
    let number = 5
    let result = romanNumerals.convertToOldRoman(number)
    assert.equal(result, "V")

    number = 10
    result = romanNumerals.convertToOldRoman(number)
    assert.equal(result, "X")
  });
});
