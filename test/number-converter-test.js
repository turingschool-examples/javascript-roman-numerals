var assert = require('assert');
var expect    = require("chai").expect;
var converter = require("../lib/number-converter");
describe('number-converter', function() {
  describe('convertToOldRoman', function() {
    it('converts arabic numbers to roman numerals', function() {
      var one = converter.convertToOldRoman(1)
      var six = converter.convertToOldRoman(6)
      var twelve = converter.convertToOldRoman(12)
      var sixty = converter.convertToOldRoman(60)
      var oneHundredTen = converter.convertToOldRoman(110)
      var fiveHundredOne = converter.convertToOldRoman(501)
      var oneThousandThree = converter.convertToOldRoman(1003)

      assert.deepEqual(one, "I", "Converts one")
      assert.deepEqual(six, "VI")
      assert.deepEqual(twelve, "XII")
      assert.deepEqual(sixty, "LX")
      assert.deepEqual(oneHundredTen, "CX")
      assert.deepEqual(fiveHundredOne, "DI")
      assert.deepEqual(oneThousandThree, "MIII")
      });
    });
  });
