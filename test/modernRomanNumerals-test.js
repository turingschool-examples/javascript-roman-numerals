const assert = require('chai').assert
const convertToNewRoman = require('../modernRomanNumerals')

describe("convertToNewRoman", function(){
  it("can convert number to new roman numeral", function(){
    assert.equal(convertToNewRoman(4), 'IV')
    assert.equal(convertToNewRoman(1944), 'MCMXLIV')
    assert.equal(convertToNewRoman(9), 'IX')
    assert.equal(convertToNewRoman(2400), 'MMCD')
    assert.equal(convertToNewRoman(199), 'CXCIX')
    assert.equal(convertToNewRoman(314), 'CCCXIV')
    assert.equal(convertToNewRoman(44), 'XLIV')
  })
})