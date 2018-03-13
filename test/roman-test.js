const assert = require('chai').assert
const Roman = require('../lib/roman')

describe("Old Roman", () => {
  it("has a dictionary of the roman numerals and arabic numbers", () => {
    let r = new Roman
    let expected = {
      1000: "M",
      500: "D",
      100: "C",
      50: "L",
      10: "X",
      5: "V",
      1: "I"
    }
    assert.deepEqual(r.numerals, expected)
  })

  it("can find the quotient(floor) for a number", () => {
    let r = new Roman
    assert.equal(r.findQuotient(2523, 1000), 2)
  })

  it("can find the remainder for a number", () => {
    let r = new Roman
    assert.equal(r.findRemainder(2523, 1000), 523)
  })

  it("can convert a number to old Roman numerals", () => {
    let r = new Roman
    assert.equal(r.convertToOldRoman(2000), "MM")
    assert.equal(r.convertToOldRoman(2523), "MMDXXIII")
  })


})
