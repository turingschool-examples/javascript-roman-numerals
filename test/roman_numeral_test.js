var assert = require('chai').assert
var convertToOldRoman = require('../lib/roman_numerals')
var convertToNewRoman = require('../lib/new_roman_numerals')
var pry = require('pryjs');

describe('roman numerals', function() {
  it("can convert a number less than five", function() {
    assert.equal(convertToOldRoman(1), 'I')
    assert.equal(convertToOldRoman(3), "III")
  });

  it('can convert a number five or greater but less than ten', function(){
    assert.equal(convertToOldRoman(5), "V")
    assert.equal(convertToOldRoman(7), "VII")
  });

  it('can convert a number equal or greater than 10 but less than 50', function(){
    assert.equal(convertToOldRoman(10), "X")
    assert.equal(convertToOldRoman(37), "XXXVII")
  });

  it('can convert a number 50 or greater but less than 100', function(){
    assert.equal(convertToOldRoman(50), "L");
    assert.equal(convertToOldRoman(83), "LXXXIII")
  });

  it('can convert a number 100 or greater but less than 500', function(){
    assert.equal(convertToOldRoman(100), "C");
    assert.equal(convertToOldRoman(257), "CCLVII")
  });

  it('can convert a number 500 or greater but less than 1000', function(){
    assert.equal(convertToOldRoman(500), "D");
    assert.equal(convertToOldRoman(722), "DCCXXII")
  });

  it('can convert a number 1000 or greater', function(){
    assert.equal(convertToOldRoman(1000), "M");
    assert.equal(convertToOldRoman(2538), "MMDXXXVIII")
  });

  it('can convert 4', function(){
    assert.equal(convertToNewRoman(4), "IV")
    assert.equal(convertToNewRoman(14), "XIV")
  })

  it('can convert 9', function(){
    assert.equal(convertToNewRoman(9), "IX")
    assert.equal(convertToNewRoman(19), "XIX")
  })

  it('can convert 40', function(){
    assert.equal(convertToNewRoman(40), "XL")
    assert.equal(convertToNewRoman(44), "XLIV")
  })

  it('can convert 90', function(){
    assert.equal(convertToNewRoman(90), "XC")
    assert.equal(convertToNewRoman(99), "XCIX")
  })

  it('can convert 400', function(){
    assert.equal(convertToNewRoman(400), "CD")
    assert.equal(convertToNewRoman(450), "CDL")
  });

  it('can convert 900', function(){
    assert.equal(convertToNewRoman(900), "CM")
    assert.equal(convertToNewRoman(999), "CMXCIX")
  });
});
