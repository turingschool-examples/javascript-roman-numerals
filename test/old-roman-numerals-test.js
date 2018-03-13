const assert = require('chai').assert
const oldRomanNumeral = require('../lib/old-roman-numerals')

describe("Old Roman Numerals", () => {
  context("it returns major values", () => {
    it("I equals 1", () => {
      assert.equal(oldRomanNumeral(1), "I")
    })

    it("V equals 5", () => {
      assert.equal(oldRomanNumeral(5), "V")
    })

    it("X equals 10", () => {
      assert.equal(oldRomanNumeral(10), "X")
    })

    it("L equals 50", () => {
      assert.equal(oldRomanNumeral(50), "L")
    })

    it("C equals 100", () => {
      assert.equal(oldRomanNumeral(100), "C")
    })

    it("D equals 500", () => {
      assert.equal(oldRomanNumeral(500), "D")
    })

    it("M equals 1000", () => {
      assert.equal(oldRomanNumeral(1000), "M")
    })
  })

  context("it returns complex values", () => {
    it("123 is CXXIII", () => {
      assert.equal(oldRomanNumeral(123), "CXXIII")
    })

    it("555 is DLV", () => {
      assert.equal(oldRomanNumeral(555), "DLV")
    })

    it("1234 is MCCXXXIIII", () => {
      assert.equal(oldRomanNumeral(1234), "MCCXXXIIII")
    })
  })
})
