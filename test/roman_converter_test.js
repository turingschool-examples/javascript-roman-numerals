const assert = require('chai').assert
const [convertToOldRoman, convertToNewRoman] = require('../lib/roman_converter')

describe("it can convert to roman", () => {
  it("converts to old roman", () => {
    assert.strictEqual(convertToOldRoman(4), 'IIII')
    assert.strictEqual(convertToOldRoman(10), 'X')
    assert.strictEqual(convertToOldRoman(3000), 'MMM')
    assert.strictEqual(convertToOldRoman(245), 'CCXXXXV')
  })
  it("converts to new roman", () => {
    assert.strictEqual(convertToNewRoman(4), 'IV')
    assert.strictEqual(convertToNewRoman(10), 'X')
    assert.strictEqual(convertToNewRoman(3000), 'MMM')
    assert.strictEqual(convertToNewRoman(245), 'CCXLV')
  })
})
