const assert = require('chai').assert
const convertToNewRoman = require('../lib/new-roman.js')

describe('convertToNewRoman functionality', function() {
  context('convertToNewRoman function', function(){
    it('it can convert a number to new Roman Numerals', function(){
      let arabicNumerals = 4;
      let answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "IV");

      arabicNumerals = 9;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "IX");

      arabicNumerals = 10;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "X");

      arabicNumerals = 11;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "XI");

      arabicNumerals = 14;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "XIV");

      arabicNumerals = 44;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "XLIV");

      arabicNumerals = 99;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "XCIX");

      arabicNumerals = 400;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "CD");

      arabicNumerals = 944;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, "CMXLIV");

      arabicNumerals = 0;
      answer = convertToNewRoman(arabicNumerals);

      assert.equal(answer, null);
    })
  })
})
