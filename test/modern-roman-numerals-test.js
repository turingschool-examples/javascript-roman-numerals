const assert = require('chai').assert
const modRomanNumeral = require('../lib/modern-roman-numerals')

describe("Modern Roman Numerals", () => {
  context("it returns major values", () => {
    it("I equals 1", () => {
      assert.equal(modRomanNumeral(1), "I")
    })

    it("IV equals 4", () => {
      assert.equal(modRomanNumeral(4), "IV")
    })

    it("V equals 5", () => {
      assert.equal(modRomanNumeral(5), "V")
    })

    it("IX equals 9", () => {
      assert.equal(modRomanNumeral(9), "IX")
    })

    it("X equals 10", () => {
      assert.equal(modRomanNumeral(10), "X")
    })

    it("XIV equals 14", () => {
      assert.equal(modRomanNumeral(14), "XIV")
    })

    it("XLIV equals 44", () => {
      assert.equal(modRomanNumeral(44), "XLIV")
    })

    it("L equals 50", () => {
      assert.equal(modRomanNumeral(50), "L")
    })

    it("XCIX equals 99", () => {
      assert.equal(modRomanNumeral(99), "XCIX")
    })

    it("C equals 100", () => {
      assert.equal(modRomanNumeral(100), "C")
    })

    it("CD equals 400", () => {
      assert.equal(modRomanNumeral(400), "CD")
    })

    it("D equals 500", () => {
      assert.equal(modRomanNumeral(500), "D")
    })

    it("CMXLIV equals 944", () => {
      assert.equal(modRomanNumeral(944), "CMXLIV")
    })

    it("CM equals 900", () => {
      assert.equal(modRomanNumeral(900), "CM")
    })

    it("M equals 1000", () => {
      assert.equal(modRomanNumeral(1000), "M")
    })
  })

})
