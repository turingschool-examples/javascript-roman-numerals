const assert = require('chai').assert;
const numerable = require('../scripts/new_roman_numerals')
var pry = require('pryjs')

describe('oldNewNumerable', function(){
  context('converts number to old roman numerable', function(){
    it('can convert a 4 to IV', function(){
      assert.equal(numerable.convertToNewRoman(4), "IV")
    });

    it('can convert a 9 to IX', function(){
      assert.equal(numerable.convertToNewRoman(9), "IX")
    });

    it('can convert a 14 to XIV', function(){
      assert.equal(numerable.convertToNewRoman(14), "XIV")
    });

    it('can convert a 19 to XIX', function(){
      assert.equal(numerable.convertToNewRoman(19), "XIX")
    });
    //
    // it('can convert a 29 to XIX', function(){
    //   assert.equal(numerable.convertToNewRoman(19), "XIX")
    // });
  });
});
