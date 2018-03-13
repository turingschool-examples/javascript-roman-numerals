const assert = require('chai').assert
const convertToNewRoman = require('../lib/old_roman.js')

describe('New Roman Converter', function() {
  it('can convert Arabic to New Roman', function() {
    assert.equal(convertToNewRoman(4), 'IV')
    assert.equal(convertToNewRoman(9), 'IX')
    assert.equal(convertToNewRoman(14), 'XIV')
    assert.equal(convertToNewRoman(44),'XLIV')
    assert.equal(convertToNewRoman(99),'XCIX')
    assert.equal(convertToNewRoman(400),'CD')
    assert.equal(convertToNewRoman(944),'CMXLIV')
  })
})
