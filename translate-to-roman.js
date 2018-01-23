$(document).ready(function() {
  function eventListenerFunction() {

    $('.number_submit input[type="submit"]').on('click', function(event){
      event.preventDefault();
      changeToRomanNumerals();
    });

    $('#clear-button input[type="submit"]').on('click', function(event) {
      event.preventDefault();
      clearRomanResults();
    })
  }

  function changeToRomanNumerals() {
    var number = $(".number_submit input[name='number']").val();
    var oldRomanNumber = convertToOldRoman(number);
    var newRomanNumber = convertToNewRoman(number);
    placeRomanNumerals(number,oldRomanNumber,newRomanNumber);
  }

  function clearRomanResults() {
    $('.roman-numeral-stuff').empty();
  }

  eventListenerFunction();
})

function placeRomanNumerals(number,oldRomanNumber,newRomanNumber) {
  $('.roman-numeral-stuff').append('<p> Original Number: ' + number + '</br>Old Roman Numeral: '+ oldRomanNumber + '</br>New Roman Numeral: ' + newRomanNumber + '</p>');
}



function convertToOldRoman(num) {
  if (num <= 0) {
    return "cannot convert a number less than or equal to zero";
  }
  else {
    var divisibleByArray = [1000,500,100,50,10,5,1]
    var numArray = []

    var convertToNumArray = function(num) {
      for (var i=0; i < divisibleByArray.length; i++) {
        while (num / divisibleByArray[i] >= 1) {
          numArray.push(divisibleByArray[i]);
          num = num - divisibleByArray[i];
        }
      }
      return numArray;
    }

    convertToNumArray(num);

    var romanHashThing = {1000:"M", 500:"D", 100:"C", 50:"L", 10:"X", 5:"V", 1:"I"}

    var finalNum = numArray.reduce(function(final, num) {
      return final + romanHashThing[num];
    }, "");

    return finalNum;
  }
}

function convertToNewRoman(num) {
  if (num <= 0) {
    return "cannot convert a number less than or equal to zero";
  }
  else {
    var divisibleByArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    var numArray = []

    var convertToNumArray = function(num) {
      for (var i=0; i < divisibleByArray.length; i++) {
        while (num / divisibleByArray[i] >= 1) {
          numArray.push(divisibleByArray[i]);
          num = num - divisibleByArray[i];
        }
      }
      return numArray;
    }

    convertToNumArray(num);

    var romanHashThing = {1000:"M", 900:"CM", 500:"D", 400:"CD", 100:"C", 90:"XC", 50:"L", 40:"XL", 10:"X", 9:"IX", 5:"V", 4:"IV", 1:"I"}

    var finalNum = numArray.reduce(function(final, num) {
      return final + romanHashThing[num];
    }, "");

    return finalNum;
  }
}
