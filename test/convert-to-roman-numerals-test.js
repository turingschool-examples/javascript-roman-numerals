var expect = require("chai").expect;
var convert = require("../app/convert-to-roman-numerals");

describe("Convert to Roman Numerals functions", function() {
  it("converts integers to either old or new roman numerals", function() {

    var oldRoman1 = convert.convertToOldRoman(4);
    var oldRoman2 = convert.convertToOldRoman(4356);
    var oldRoman3 = convert.convertToOldRoman(2347);
    var oldRoman4 = convert.convertToOldRoman(555);
    var oldRoman5 = convert.convertToOldRoman(0);

    expect(oldRoman1).to.deep.equal("IIII");
    expect(oldRoman2).to.deep.equal("MMMMCCCLVI");
    expect(oldRoman3).to.deep.equal("MMCCCXXXXVII");
    expect(oldRoman4).to.deep.equal("DLV");
    expect(oldRoman5).to.deep.equal("cannot convert a number less than or equal to zero");

    var newRoman1 = convert.convertToNewRoman(4);
    var newRoman2 = convert.convertToNewRoman(3356);
    var newRoman3 = convert.convertToNewRoman(2947);
    var newRoman4 = convert.convertToNewRoman(595);
    var newRoman5 = convert.convertToNewRoman(0);

    expect(newRoman1).to.deep.equal("IV");
    expect(newRoman2).to.deep.equal("MMMCCCLVI");
    expect(newRoman3).to.deep.equal("MMCMXLVII");
    expect(newRoman4).to.deep.equal("DXCV");
    expect(newRoman5).to.deep.equal("cannot convert a number less than or equal to zero");
  })
})
