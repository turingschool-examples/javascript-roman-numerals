import RomanNumerals '/roman_numerals.js'
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const result = document.getElementById('romnum')

submit.addEventListener('click', function() {
    let toConvert = input.value();
    let convert = new RomanNumerals(toConvert)
    let newResult = convert.convertToRoman
    result.innerHTML = newResult
})