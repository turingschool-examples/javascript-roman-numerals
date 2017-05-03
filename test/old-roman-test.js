const convertToOldRoman = require('../lib/old-roman')
const expect = require('chai').expect

describe('convertToOldRoman function', function(){
  it('converts a number to old roman notation', function(){
    expect(convertToOldRoman(35)).to.eq('XXXV')
    expect(convertToOldRoman(83)).to.eq('LXXXIII')
    expect(convertToOldRoman(125)).to.eq('CXXV')
    expect(convertToOldRoman(483)).to.eq('CCCCLXXXIII')
    expect(convertToOldRoman(576)).to.eq('DLXXVI')
    expect(convertToOldRoman(3567)).to.eq('MMMDLXVII')
  })
})
