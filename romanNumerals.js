function convertToOldRoman(num) {
  if (typeof(num) != "number" || num == NaN || num%1 != 0){
    return "Cannot Compute";
  } else {
    romanNum = []
    remainder = null
    while (remainder != 0) {
      determineNum(num)
    }
    return romanNum.join("")
  }
}

function determineNum(num){
  if(Math.floor(num/1000) > 0){
    remainder = num%1000
    romanNum.push("M")
  } else if(Math.floor(num/500) > 0) {
    remainder = num%500
    romanNum.push("D")
  } else if(Math.floor(num/100) > 0) {
    remainder = num%100
    romanNum.push("C")
  } else if(Math.floor(num/50) > 0) {
    remainder = num%50
    romanNum.push("L")
  } else if(Math.floor(num/10) > 0) {
    remainder = num%10
    romanNum.push("X")
  } else if(Math.floor(num/5) > 0) {
    remainder = num%5
    romanNum.push("V")
  } else {
    if (remainder == null) {
     remainder = num
    }
    remainder = remainder - 1
    romanNum.push("I")
  }
}

module.exports = { convertToOldRoman, determineNum }