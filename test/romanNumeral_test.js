const assert = require('chai').assert;
const convertToOldRoman = require('../romanNumerals')

describe("convertToOldRoman", function() {
  it("can return the old roman numeral for a given integer", function() {
    assert.deepEqual(convertToOldRoman(2678), "MMDCLXXVIII")
  })
})
