const convertToOldRoman = require ('./convertToOldRoman')
const convertToNewRoman = require ('./convertToNewRoman')

const oldRomanBtn = document.getElementById('oldRomanConvert')
const oldRomanInput = document.getElementById('oldRoman')
const oldRomanOutput = document.getElementById('oldRomanResult')

const newRomanBtn = document.getElementById('newRomanConvert')
const newRomanInput = document.getElementById('newRoman')
const newRomanOutput = document.getElementById('newRomanResult')

oldRomanBtn.addEventListener('click', (e) => {
  oldRomanOutput.innerText = convertToOldRoman(oldRomanInput.value)
})

newRomanBtn.addEventListener('click', (e) => {
  newRomanOutput.innerText = convertToNewRoman(newRomanInput.value)
})
