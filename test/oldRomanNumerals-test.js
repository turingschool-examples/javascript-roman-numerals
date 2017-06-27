const assert = require('chai').assert
const convertToOldRoman = require('../oldRomanNumerals')

describe("convertToOldRoman", function(){
  it("can convert number to old roman numeral", function(){
    assert.equal(convertToOldRoman(4), 'IIII')
    assert.equal(convertToOldRoman(1001), 'MI')
    assert.equal(convertToOldRoman(2004), 'MMIIII')
    assert.equal(convertToOldRoman(1616), 'MDCXVI')
  })
})
