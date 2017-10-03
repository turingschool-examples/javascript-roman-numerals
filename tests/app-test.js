const assert = require('chai').assert
const roman = require('../app')

describe('convert arabic numerals to roman numerals', function() {
  it('accurately converts to roman numerals', function() {
    assert.deepEqual(roman.convert(), "it works!")
  });
});
