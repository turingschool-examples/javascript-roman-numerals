var Roman = require('./numerals');
var toRoman = Roman.toRoman;
var letters = Roman.letters;
var digit = Roman.digit;

var assert = require('assert');
describe('Roman', function() {
  describe('#toRoman()', function() {
    it('should return roman numerals for single digits', function(){
      assert.equal('I', toRoman(1));
      assert.equal('II', toRoman(2));
      assert.equal('III', toRoman(3));
      assert.equal('IV', toRoman(4));
      assert.equal('V', toRoman(5));
      assert.equal('VI', toRoman(6));
      assert.equal('VII', toRoman(7));
      assert.equal('VIII', toRoman(8));
      assert.equal('IX', toRoman(9));
    });
    it('should return roman numerals for double digits', function(){
      assert.equal('XIV', toRoman(14));
      assert.equal('XXVII', toRoman(27));
      assert.equal('XLIV', toRoman(44));
      assert.equal('XLVIII', toRoman(48));
      assert.equal('LIX', toRoman(59));
      assert.equal('XCIII', toRoman(93));
      assert.equal('XCIX', toRoman(99));
    });
    it('should return roman numerals for triple digits', function(){
      assert.equal('CLXIII', toRoman(163));
      assert.equal('CD', toRoman(400));
      assert.equal('CDII', toRoman(402));
      assert.equal('DLXXV', toRoman(575));
      assert.equal('DCCC', toRoman(800));
      assert.equal('CMXI', toRoman(911));
      assert.equal('CMXI', toRoman(944));
    });
    it('should return roman numerals for quadruple digits', function(){
      assert.equal('MXXIV', toRoman(1024));
      assert.equal('MMCMXCIX', toRoman(2999));
      assert.equal('MMM', toRoman(3000));
    });
  });
});