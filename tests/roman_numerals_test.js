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
    assert.equal(converter.convertToOldRoman(), 'XLV')
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
    let converter = new RomanNumerals(94)
    assert.equal(converter.convertToOldRoman(), 'XCIV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(121)
    assert.equal(converter.convertToOldRoman(), 'CXXI')
})


it("can convert old roman", function() {
    let converter = new RomanNumerals(144)
    assert.equal(converter.convertToOldRoman(), 'CXLIV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(199)
    assert.equal(converter.convertToOldRoman(), 'CXCIX')
})
it("can convert old roman", function() {
    let converter = new RomanNumerals(445)
    assert.equal(converter.convertToOldRoman(), 'CDXLV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(777)
    assert.equal(converter.convertToOldRoman(), 'DCCLXXVII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(997)
    assert.equal(converter.convertToOldRoman(), 'DMXCVII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(1683)
    assert.equal(converter.convertToOldRoman(), 'MDCLXXXIII')
})