const assert = require('chai').assert;
const convertToNewRoman = require('../convert-to-new-roman')

describe('convert to new roman', function(){
  it('can convert a number to new roman numeral', function(){
    assert.equal(convertToNewRoman(99), 'IV')
  })
})
