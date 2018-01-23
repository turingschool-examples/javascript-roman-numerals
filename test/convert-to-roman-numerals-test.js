var expect = require("chai").expect;
var convert = require("../app/convert-to-roman-numerals");

describe("Convert to Roman Numerals functions", function() {
  it("converts integers to either old or new roman numerals", function() {

    var oldRoman1 = convert.convertToOldRoman(4);

    expect(oldRoman1).to.deep.equal("IIII");
  })
})
