const assert = require('chai').assert;
const convertToOldRoman = require('../lib/old_roman');

describe('Old Roman Numeral', function() {
  it('can convert 4', function() {
    assert.equal(convertToOldRoman(4), 'IIII');
  });

  it('can convert 5', function() {
    assert.equal(convertToOldRoman(5), 'V');
  });

  it('can convert 10', function() {
    assert.equal(convertToOldRoman(10), 'X');
  });

  it('can convert 50', function() {
    assert.equal(convertToOldRoman(50), 'L');
  });

  it('can convert 100', function() {
    assert.equal(convertToOldRoman(100), 'C');
  });

  it('can convert 500', function() {
    assert.equal(convertToOldRoman(500), 'D');
  });

  it('can convert 1000', function() {
    assert.equal(convertToOldRoman(1000), 'M');
  });
});
