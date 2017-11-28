const assert = require('chai').assert;
const convertToOldRoman = require('../convert-to-old-roman')

describe('convert to old roman', function(){
  it('can convert a number to old roman numeral', function(){
    assert.equal(convertToOldRoman(4), 'IIII')
    assert.equal(convertToOldRoman(2001), 'MMI')
    assert.equal(convertToOldRoman(8213), 'MMMMMMMMCCXIII')
  })
})
