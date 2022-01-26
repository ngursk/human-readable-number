module.exports = function toReadable (number) {
//const toReadable = (number) => {
  let result = 'start';
  let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) {
    result = 'zero';
    //return result;
  }  else if (number < 20) {
    result = units[number];
  } else if (number > 19 && number < 100) {
    let textNumber = number.toString();
    result = tens[textNumber[0]] + ' ' + units[textNumber[1]];
  } else if (number > 99 && number < 1000) {
    let textNumber = number.toString();
    if (number%100 < 21 ) {
      result = units[textNumber[0]] + ' hundred ' + units[+(textNumber[1] + textNumber[2])];
    } else if (number%100 > 20 ) {
      result = units[textNumber[0]] + ' hundred ' + tens[textNumber[1]] + ' ' + units[textNumber[2]];
    }    
  }
console.log(result);
return result;
}

//toReadable(811)