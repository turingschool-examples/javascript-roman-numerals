assert = require('chai').assert;
const toOldRomanNumeral = require('../lib/OldRomanNumeral');

describe("Old Roman Numeral Converter", function() {
  it("can convert 3", function() {
    assert.deepEqual(toOldRomanNumeral(3), "III")
  })

  it("can convert 9", function() {
    assert.deepEqual(toOldRomanNumeral(9), "VIIII")
  })

  it("can convert 123", function() {
    assert.deepEqual(toOldRomanNumeral(123), "CXXIII")
  })

  it("can convert 1175", function() {
    assert.deepEqual(toOldRomanNumeral(1175), "MCLXXV")
  })
})