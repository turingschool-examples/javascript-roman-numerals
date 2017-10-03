const assert = require('chai').assert
const convertToOldRoman = require('../lib/old-roman.js')

describe('convertToOldRoman functionality', function() {
  context('convertToOldRoman function', function(){
    it('it can convert a number to old Roman Numerals', function(){
      let arabicNumerals = 1;
      let answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "I");

      arabicNumerals = 4;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "IIII");

      arabicNumerals = 5;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "V");

      arabicNumerals = 10;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "X");

      arabicNumerals = 14;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "XIIII");

      arabicNumerals = 15;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "XV");

      arabicNumerals = 50;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "L");

      arabicNumerals = 100;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "C");

      arabicNumerals = 500;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "D");

      arabicNumerals = 1000;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "M");

      arabicNumerals = 3000;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, "MMM");

      arabicNumerals = 0;
      answer = convertToOldRoman(arabicNumerals);

      assert.equal(answer, null);
    })
  })
})
