const assert = require("chai").assert
const RomanNumerals = require('../roman_numerals')

it("can convert old roman", function() {
    let converter = new RomanNumerals(5)
    assert.equal(converter.convertToOldRoman(), 'V')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(4)
    assert.equal(converter.convertToOldRoman(), 'IV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(9)
    assert.equal(converter.convertToOldRoman(), 'IX')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(18)
    assert.equal(converter.convertToOldRoman(), 'XVIII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(19)
    assert.equal(converter.convertToOldRoman(), 'XIX')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(28)
    assert.equal(converter.convertToOldRoman(), 'XXVIII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(45)
    assert.equal(converter.convertToOldRoman(), 'XXXXV')
})


it("can convert old roman", function() {
    let converter = new RomanNumerals(51)
    assert.equal(converter.convertToOldRoman(), 'LI')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(66)
    assert.equal(converter.convertToOldRoman(), 'LXVI')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(121)
    assert.equal(converter.convertToOldRoman(), 'CXXI')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(777)
    assert.equal(converter.convertToOldRoman(), 'DCCLXXVII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(1683)
    assert.equal(converter.convertToOldRoman(), 'MDCLXXXIII')
})