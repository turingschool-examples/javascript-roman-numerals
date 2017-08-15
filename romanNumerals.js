var convertToOldRoman = function(number) {
	romanNumeral = "";
	remainder = number;
	if (number >= 1000) {
	  var m = Math.floor(number / 1000);
	  remainder -= m * 1000;
	  romanNumeral += buildString('M', m)
	}
	if (remainder >= 500) {
	  var d = Math.floor(remainder / 500);
	  remainder -= d * 500;
	  romanNumeral += buildString('D', d)
	}
	if (remainder >= 100) {
	  var c = Math.floor(remainder / 100);
	  remainder -= c * 100;
	  romanNumeral += buildString('C', c)
	}
	if (remainder >= 50) {
	  var l = Math.floor(remainder / 50);
	  remainder -= l * 50;
	  romanNumeral += buildString('L', l)
	}
	if (remainder >= 10) {
	  var x = Math.floor(remainder / 10);
	  remainder -= x * 10;
	  romanNumeral += buildString('X', x)
	}
	if (remainder >= 5) {
	  var v = Math.floor(remainder / 5);
	  remainder -= v * 5;
	  romanNumeral += buildString('V', v)
	}
	if (remainder >= 1) {
	  var i = Math.floor(remainder / 1);
	  remainder -= i * 1;
	  romanNumeral += buildString('I', i)
	}
	return romanNumeral;
}

var buildString = function(letter, repetition) {
  var subString = ""
  for(var i = 0; i < repetition; i++) {
    subString += letter
  }
  return subString;
}


var convertToNewRoman = function(number) {
	  if(number < 1){ return "";}
	  if(number >= 1000){ return "M" + convertToNewRoman(number - 1000);}
	  if(number >= 900){ return "CM" + convertToNewRoman(number - 900);}
	  if(number >= 500){ return "D" + convertToNewRoman(number - 500);}
	  if(number >= 400){ return "CD" + convertToNewRoman(number - 400);}
	  if(number >= 100){ return "C" + convertToNewRoman(number - 40);}
	  if(number >= 90){ return "XC" + convertToNewRoman(number - 90);}
	  if(number >= 50){ return "X" + convertToNewRoman(number - 50);}
	  if(number >= 40){ return "XL" + convertToNewRoman(number - 40);}
	  if(number >= 10){ return "X" + convertToNewRoman(number - 10);}
	  if(number >= 9){ return "IX" + convertToNewRoman(number - 9);}
	  if(number >= 5){ return "V" + convertToNewRoman(number - 5);}
	  if(number >= 4){ return "IV" + convertToNewRoman(number - 4);}
	  if(number >= 1){ return "I" + convertToNewRoman(number - 1);}  
}

module.exports = {convertToOldRoman, convertToNewRoman}