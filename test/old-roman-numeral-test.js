assert = require('chai').assert 
expect = require('chai').expect
const convertToOldRomanFunction = require('../lib/old-roman-numeral')

describe("converting a normal number to a roman number", () => {
  it("show the roman code for a given normal number",() => {
    assert.equal(convertToOldRomanFunction.convertToOldRoman(4), "IIII")
  })
})