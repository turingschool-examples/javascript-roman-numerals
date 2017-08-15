const assert = require('chai').assert
const romanizer = require('../romanize')

describe('Roman Numeral Converter', () => {
  it('converts a number to old style roman numerals', () => {
    number = 145
    result = romanizer.oldRoman(number)

    assert.equal(result, 'CXXXXV')
  })

  it('converts a number to new style roman numerals', () => {
    number = 944
    result = romanizer.newRoman(number)

    assert.equal(result, 'CMXLIV')
  })
})