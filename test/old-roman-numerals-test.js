const assert = require('chai');
const oldRomanNumerals = require('../lib/old-roman-numerals.js');

describe('Old roman numerals', function() {
  context('given a number', function() {
    it('returns the roman numeral conversion of that number', function() {

      assert(oldRomanNumerals(476), 'CDLXXVI');
    });
  });
});
