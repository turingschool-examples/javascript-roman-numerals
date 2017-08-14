const assert = require('chai').assert
const convertToOldRoman = require('../convertToOldRoman.js')

describe('convertToOldRoman()', () => {
  it('it returns I for 1', () => {
    assert.equal(convertToOldRoman(1), 'I')
  })

  it('it returns IIII for 4', () => {
    assert.equal(convertToOldRoman(4), 'IIII')
  })

  it('it returns V for 5', () => {
    assert.equal(convertToOldRoman(5), 'V')
  })

  it('it returns VI for 6', () => {
    assert.equal(convertToOldRoman(6), 'VI')
  })

  it('it returns VIIII for 9', () => {
    assert.equal(convertToOldRoman(9), 'VIIII')
  })

  it('it returns X for 10', () => {
    assert.equal(convertToOldRoman(10), 'X')
  })

  it('it returns L for 50', () => {
    assert.equal(convertToOldRoman(50), 'L')
  })

  it('it returns C for 100', () => {
    assert.equal(convertToOldRoman(100), 'C')
  })

  it('it returns D for 500', () => {
    assert.equal(convertToOldRoman(500), 'D')
  })

  it('it returns M for 1000', () => {
    assert.equal(convertToOldRoman(1000), 'M')
  })

  it('it returns MC for 1100', () => {
    assert.equal(convertToOldRoman(1100), 'MC')
  })

  it('it returns MMXVII for 2017', () => {
    assert.equal(convertToOldRoman(2017), 'MMXVII')
  })
})
// | Arabic Number  | Roman Numeral |
// | -------------- | ------------- |
// | 1              | I             |
// | 5              | V             |
// | 10             | X             |
// | 50             | L             |
// | 100            | C             |
// | 500            | D             |
// | 1000           | M             |
