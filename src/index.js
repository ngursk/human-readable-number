module.exports = function toReadable (number) {
//const toReadable = (number) => {
  let result = 'start';
  units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) {
    result = 'zero';
    //return result;
  } else if (number < 20) {
    switch (number) {
      case 1: result = 'one';
      case 2: result = 'two';
      case 3: result = 'three';
      case 4: result = 'four';
      case 5: result = 'five';
      case 6: result = 'six';
      case 7: result = 'seven';
      case 8: result = 'eight';
      case 9: result = 'nine';
      case 10: result = 'ten';
      case 11: result = 'eleven';
      case 12: result = 'twelve';
      case 13: result = 'thirteen';
      case 14: result = 'fourteen';
      case 15: result = 'fifteen';
      case 16: result = 'sixteen';
      case 17: result = 'seventeen';
      case 18: result = 'eighteen';
      case 19: result = 'nineteen';
      case 20: result = 'twenty';
    }
  }
console.log(result);
return result;
}