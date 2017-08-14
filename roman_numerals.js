var pry = require('pryjs');

const key = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'DM', 1000: 'M' }

class RomanNumerals {
    constructor(number) {
        this.number = number
    }

    convertToOldRoman() {
        if (key[this.number.toString()]) {
            return key[this.number.toString()]
        } else {
            return this.transcriber()
        }
    }

    transcriber(number = this.number) {
        if (key[number]) {
            return key[number]
        } else if (number < 5) {
            return key['1'].repeat(number)
        } else if (number < 10) {
            let remainder = number - 5
            return key['5'] + key['1'].repeat(remainder)
        } else if (number < 50) {
            let tens = Math.floor(number / 10)
            let remainder = number % 10
            return key['10'].repeat(tens) + this.transcriber(remainder)
        } else if (number < 100) {
            let fifties = Math.floor(number / 50)
            let remainder = number % 50
            return key['50'].repeat(fifties) + this.transcriber(remainder)
        } else if (number < 500) {
            let hundreds = Math.floor(number / 100)
            let remainder = number % 100
            return key['100'].repeat(hundreds) + this.transcriber(remainder)
        } else if (number < 1000) {
            let fivehundreds = Math.floor(number / 500)
            let remainder = number % 500
            return key['500'].repeat(fivehundreds) + this.transcriber(remainder)
        } else {
            let thousands = Math.floor(number / 1000)
            let remainder = number % 1000
            return key['1000'].repeat(thousands) + this.transcriber(remainder)
        }
    }
}

module.exports = RomanNumerals