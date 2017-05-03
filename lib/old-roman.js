var legend = {1000: 'M',
              500:  'D',
              100:  'C',
              50:   'L',
              10:   'X',
              5:    'V',
              1:    'I'}

function convertToOldRoman(number){
  var workingNumber = number;
  var Roman = '';
  Object.keys(legend).reverse().forEach(function(key){
    intKey = parseInt(key);
    count = Math.floor(workingNumber / intKey);
    Roman = Roman + legend[key].repeat(count);
    workingNumber = workingNumber - (count * intKey);
  })
  return Roman;
}

module.exports = convertToOldRoman;
