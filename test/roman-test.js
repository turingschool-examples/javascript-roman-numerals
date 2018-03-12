const assert = require('chai').assert
const Roman = require('../lib/roman')

describe("Old Roman", () => {
  it("has a dictionary of the roman numerals and arabic numbers", () => {
    let r = new Roman
    let expected = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    assert.deepEqual(r.numerals, expected)
  })

  it("can find the quotient(floor) for a number", () => {
    let r = new Roman
    assert.equal(r.quotient(2523, 1000), 2)
  })
  
  it("can find the remainder for a number", () => {
    let r = new Roman
    assert.equal(r.remainder(2523, 1000), 523)

  })


})
