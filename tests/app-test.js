const assert = require('chai').assert
const roman = require('../app')

describe('convert arabic numerals to roman numerals', function() {
  it('accurately converts to roman numerals', function() {
    assert.deepEqual(roman.convert(5), 'V')
    assert.deepEqual(roman.convert(6), 'VI')
    assert.deepEqual(roman.convert(8), 'VIII')
    assert.deepEqual(roman.convert(4), 'IV')
    assert.deepEqual(roman.convert(9), 'IX')
    assert.deepEqual(roman.convert(14), 'XIV')
    assert.deepEqual(roman.convert(44), 'XLIV')
    assert.deepEqual(roman.convert(99), 'XCIX')
    assert.deepEqual(roman.convert(400), 'CD')
    assert.deepEqual(roman.convert(944), 'CMXLIV')
  });
});
