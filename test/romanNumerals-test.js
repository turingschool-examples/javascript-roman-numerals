const assert = require('chai').assert
const RomanNumerals = require('../romanNumerals')

describe('the old roman numeral function', function() {
	it('can return the old numeral in correct format', function() {
		assert.equal(RomanNumerals.convertToOldRoman(4), 'IIII');	
	})
	it('can return the old numeral for 2433', function() {
		assert.equal(RomanNumerals.convertToOldRoman(2433), 'MMCCCCXXXIII');	
	})
})
describe('the new roman numeral function', function() {
	it('can return the new numeral in correct format', function() {
		assert.equal(RomanNumerals.convertToNewRoman(4), 'IV');	
	})
	it('can return a much larger number', function() {
		assert.equal(RomanNumerals.convertToNewRoman(1948), 'MCMXLVIII');	
	})
})

