const expect = require('expect');
const convertToOldRoman = require('../lib/old_roman').oldRoman;
const convertToNewRoman = require('../lib/old_roman').newRoman;

describe('convertToOldRoman', function() {
  it('converts num to roman numeral', function() {
    expect(convertToOldRoman(1000)).toEqual('M');
    expect(convertToOldRoman(1500)).toEqual('MD');
    expect(convertToOldRoman(1100)).toEqual('MC');
    expect(convertToOldRoman(50)).toEqual('L');
    expect(convertToOldRoman(40)).toEqual('XXXX');
    expect(convertToOldRoman(5)).toEqual('V');
    expect(convertToOldRoman(3)).toEqual('III');


    expect(convertToOldRoman(17)).toEqual('XVII');
    expect(convertToOldRoman(2475)).toEqual('MMCCCCLXXV');
  })
})

describe('convertToNewRoman', function() {
  it('converts num to roman numeral', function() {
    expect(convertToNewRoman(4)).toEqual('IV');
    expect(convertToNewRoman(944)).toEqual('CMXLIV');
  })
})
