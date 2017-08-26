const assert = require('chai').assert
const romanize = require('../lib/romanizer')

describe('Roman Numeral Converter', function() {
  it('can do old conversion 1', function() {
    number = 1
    result = romanize.oldRoman(number)

    assert.equal(result, 'I')
  })
  
  it('can do old conversion 4', function() {
    number = 4
    result = romanize.oldRoman(number)

    assert.equal(result, 'IIII')
  })

  it('can do old conversion 5', function() {
    number = 5
    result = romanize.oldRoman(number)

    assert.equal(result, 'V')
  })

  it('can do old conversion 145', function() {
    number = 145
    result = romanize.oldRoman(number)

    assert.equal(result, 'CXXXXV')
  })

})
