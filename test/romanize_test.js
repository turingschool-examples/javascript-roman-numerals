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

  it('can do old conversion 9', function() {
    number = 9
    result = romanize.oldRoman(number)

    assert.equal(result, 'VIIII')
  })

  it('can do old conversion 145', function() {
    number = 145
    result = romanize.oldRoman(number)

    assert.equal(result, 'CXXXXV')
  })

  it('can do old conversion 999', function() {
    number = 999
    result = romanize.oldRoman(number)

    assert.equal(result, 'DCCCCLXXXXVIIII')
  })

  it('can do old conversion 4444', function() {
    number = 4444
    result = romanize.oldRoman(number)

    assert.equal(result, 'MMMMCCCCXXXXIIII')
  })
})
