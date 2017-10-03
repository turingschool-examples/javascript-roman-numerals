const assert = require('chai').assert
const convertToOldRoman = require('../conversion')

describe('testing roman numberal conversion', function() {
  context('testing old roman conversion', function() {
    it('returns a single I', function() {
      assert.equal(convertToOldRoman(1), "I")
    })

    it('returns four I s', function() {
      assert.equal(convertToOldRoman(4), "IIII")
    })

    it('returns V', function() {
      assert.equal(convertToOldRoman(5), "V")
    })

    it('returns X', function() {
      assert.equal(convertToOldRoman(10), "X")
    })
  })
})
