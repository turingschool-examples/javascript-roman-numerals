const assert = require('chai').assert;
const numerable = require('../scripts/old_roman_numerals')
var pry = require('pryjs')

describe('oldRomanNumerable', function(){
  context('converts number to old roman numerable', function(){
    it('can convert a 1 to i', function(){
      assert.equal(numerable.convertToOldRoman(1), 'I')
    });

    it('can convert a 5 to V', function(){
      assert.equal(numerable.convertToOldRoman(5), 'V')
    });

    it('can convert a 10 to X', function(){
      assert.equal(numerable.convertToOldRoman(10), 'X')
    });

    it('can convert a 50 to L', function(){
      assert.equal(numerable.convertToOldRoman(50), 'L')
    });

    it('can convert a 100 to C', function(){
      assert.equal(numerable.convertToOldRoman(100), 'C')
    });

    it('can convert a 500 to D', function(){
      assert.equal(numerable.convertToOldRoman(500), 'D')
    });

    it('can convert a 1000 to M', function(){
      assert.equal(numerable.convertToOldRoman(1000), 'M')
    });

    it('can convert a 4 to IIII', function(){
      assert.equal(numerable.convertToOldRoman(4), 'IIII')
    });

    it('can convert a 6 to VI', function(){
      assert.equal(numerable.convertToOldRoman(6), 'VI')
    });

    it('can convert 11 to XI', function(){
      assert.equal(numerable.convertToOldRoman(11), 'XI')
    });

    it('can convert 15 to XV', function(){
      assert.equal(numerable.convertToOldRoman(15), 'XV')
    });
    it('can convert 17 to XVII', function(){
      assert.equal(numerable.convertToOldRoman(17), 'XVII')
    });

    it('can convert 37 to XVII', function(){
      assert.equal(numerable.convertToOldRoman(37), 'XXXVII')
    });

    it('can convert 52 to LII', function(){
      assert.equal(numerable.convertToOldRoman(52), 'LII')
    });

    it('can convert 77 to LXXVII', function(){
      assert.equal(numerable.convertToOldRoman(77), 'LXXVII')
    });

    it('can convert 103 to CIII', function(){
      assert.equal(numerable.convertToOldRoman(103), 'CIII')
    });

    it('can convert 476 to CCCCLXXVI', function(){
      assert.equal(numerable.convertToOldRoman(476), 'CCCCLXXVI')
    });

    it('can convert 523 to DXXIII', function(){
      assert.equal(numerable.convertToOldRoman(523), 'DXXIII')
    });

    it('can convert 1059 to MLVIIII', function(){
      assert.equal(numerable.convertToOldRoman(1059), 'MLVIIII')
    });

    it('can convert 2489 to MLVIIII', function(){
      assert.equal(numerable.convertToOldRoman(2489), 'MMCCCCLXXXVIIII')
    });

  });
});
