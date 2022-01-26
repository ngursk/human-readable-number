module.exports = function toReadable (number) {
//const toReadable = (number) => {
  let result = 'start';
  let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) {
    result = 'zero';
    //return result;
  }  else if (number <21) {
    result = units[`${number}`];
  }
console.log(result);
return result;
}

//toReadable(15);