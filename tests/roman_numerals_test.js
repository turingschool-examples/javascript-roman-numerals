const assert = require("chai").assert
const RomanNumerals = require('../roman_numerals')

it("can convert old roman", function() {
    let converter = new RomanNumerals(5)
    assert.equal(converter.convertToRoman(), 'V')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(4)
    assert.equal(converter.convertToRoman(), 'IV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(9)
    assert.equal(converter.convertToRoman(), 'IX')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(18)
    assert.equal(converter.convertToRoman(), 'XVIII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(19)
    assert.equal(converter.convertToRoman(), 'XIX')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(28)
    assert.equal(converter.convertToRoman(), 'XXVIII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(45)
    assert.equal(converter.convertToRoman(), 'XLV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(51)
    assert.equal(converter.convertToRoman(), 'LI')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(66)
    assert.equal(converter.convertToRoman(), 'LXVI')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(94)
    assert.equal(converter.convertToRoman(), 'XCIV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(121)
    assert.equal(converter.convertToRoman(), 'CXXI')
})


it("can convert old roman", function() {
    let converter = new RomanNumerals(144)
    assert.equal(converter.convertToRoman(), 'CXLIV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(199)
    assert.equal(converter.convertToRoman(), 'CXCIX')
})
it("can convert old roman", function() {
    let converter = new RomanNumerals(445)
    assert.equal(converter.convertToRoman(), 'CDXLV')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(777)
    assert.equal(converter.convertToRoman(), 'DCCLXXVII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(997)
    assert.equal(converter.convertToRoman(), 'DMXCVII')
})

it("can convert old roman", function() {
    let converter = new RomanNumerals(1683)
    assert.equal(converter.convertToRoman(), 'MDCLXXXIII')
})