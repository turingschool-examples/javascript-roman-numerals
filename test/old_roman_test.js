const assert = require('chai').assert
const convertToOldRoman = require('../lib/old_roman.js')

describe('Old Roman Converter', function() {
  it('can convert Arabic to Old Roman', function() {
    // assert.equal(convertToOldRoman(4), 'IIII')
    assert.equal(convertToOldRoman(13), 'XIII')
    assert.equal(convertToOldRoman(61), 'LXI')
    assert.equal(convertToOldRoman(115),'CXV')
    assert.equal(convertToOldRoman(2039),'MMXXXVIIII')
  })
})
