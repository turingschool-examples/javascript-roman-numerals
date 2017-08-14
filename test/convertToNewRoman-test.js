const assert = require('chai').assert
const convertToNewRoman = require('../convertToNewRoman.js')

describe('convertToNewRoman()', () => {
  it('it returns I for 1', () => {
    assert.equal(convertToNewRoman(1), 'I')
  })

  it('it returns IV for 4', () => {
    assert.equal(convertToNewRoman(4), 'IV')
  })

  it('it returns V for 5', () => {
    assert.equal(convertToNewRoman(5), 'V')
  })

  it('it returns IX for 9', () => {
    assert.equal(convertToNewRoman(9), 'IX')
  })

  it('it returns X for 10', () => {
    assert.equal(convertToNewRoman(10), 'X')
  })

  it('it returns XL for 40', () => {
    assert.equal(convertToNewRoman(40), 'XL')
  })

  it('it returns XLIX for 49', () => {
    assert.equal(convertToNewRoman(49), 'XLIX')
  })

  it('it returns L for 50', () => {
    assert.equal(convertToNewRoman(50), 'L')
  })

  it('it returns XC for 90', () => {
    assert.equal(convertToNewRoman(90), 'XC')
  })

  it('it returns C for 100', () => {
    assert.equal(convertToNewRoman(100), 'C')
  })

  it('it returns CD for 400', () => {
    assert.equal(convertToNewRoman(400), 'CD')
  })

  it('it returns D for 500', () => {
    assert.equal(convertToNewRoman(500), 'D')
  })

  it('it returns CM for 900', () => {
    assert.equal(convertToNewRoman(900), 'CM')
  })

  it('it returns M for 1000', () => {
    assert.equal(convertToNewRoman(1000), 'M')
  })
})
