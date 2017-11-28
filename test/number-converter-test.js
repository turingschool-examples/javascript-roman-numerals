var assert = require('assert');
var expect    = require("chai").expect;
var triangleFunctions = require("../lib/number-converter");
describe('number-converter', function() {
  describe('convertToOldRoman', function() {
    it('converts arabic numbers to roman numerals', function() {
      var one = triangleFunctions.isTriangle(1)
      var six = triangleFunctions.isTriangle(6)
      var twelve = triangleFunctions.isTriangle(12)
      var sixty = triangleFunctions.isTriangle(60)
      var oneHundredTen = triangleFunctions.isTriangle(110)
      var fiveHundredOne = triangleFunctions.isTriangle(501)
      var oneThousandThree = triangleFunctions.isTriangle(1003)

      assert.deepEqual(one, "I")
      assert.deepEqual(six, "VI")
      assert.deepEqual(twelve, "XII")
      assert.deepEqual(sixty, "LX")
      assert.deepEqual(oneHundredTen, "CX")
      assert.deepEqual(fiveHundredOne, "DI")
      assert.deepEqual(oneThousandThree, "MIII")
      });
    });
  });
