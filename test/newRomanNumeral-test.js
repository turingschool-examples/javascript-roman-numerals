assert = require('chai').assert;
const toNewRomanNumeral = require('../lib/newRomanNumeral');

describe("Old Roman Numeral Converter", function() {
  it("can convert 3", function() {
    assert.deepEqual(toNewRomanNumeral(3), "III")
  })

  it("can convert 9", function() {
    assert.deepEqual(toNewRomanNumeral(9), "IX")
  })

  it("can convert 124", function() {
    assert.deepEqual(toNewRomanNumeral(124), "CXXIV")
  })

  it("can convert 1175", function() {
    assert.deepEqual(toNewRomanNumeral(1175), "MCLXXV")
  })
})