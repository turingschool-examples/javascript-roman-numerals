const assert = require('chai').assert
const [convertToOldRoman, convertToModernRoman] = require('../lib/roman_converter')

describe("it can convert to roman", () => {
  
  it("converts to old roman", () => {
    assert.equal(convertToOldRoman(22), 'XXII')
    assert.equal(convertToOldRoman(105), 'CV')
    assert.equal(convertToOldRoman(545), 'DXXXXV')
    assert.equal(convertToOldRoman(1200), 'MCC')
  })

  it("converts to modern roman", () => {
    assert.equal(convertToModernRoman(2), 'II')
    assert.equal(convertToModernRoman(105), 'CV')
    assert.equal(convertToModernRoman(2234), 'MMCCXXXIV')
    assert.equal(convertToModernRoman(543), 'DXLIII')
  })
})
