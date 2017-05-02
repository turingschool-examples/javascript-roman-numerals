const assert = require('chai').assert
const romanNumeralConverter = require('../lib/roman-numerals')

describe("romanNumeralConverter function", function() {
  it('converts arabic number to roman numeral', function() {
    assert.equal(romanNumeralConverter(10), "X")
    assert.equal(romanNumeralConverter(1000), "M")
    assert.equal(romanNumeralConverter(2017), "MMXVII")
  });
});
