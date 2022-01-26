module.exports = function toReadable (number) {
    const readTen = (small) => {
        switch (small) {
        case 0:
          return 'zero';
        case 1:
          return 'one';
        case 2:
          return 'two';
        case 3: 
          return 'three';
        case 4: 
          return 'four';
        case 5:
          return 'five';
        case 6: 
          return 'six';
        case 7:  
          return 'seven';
        case 8:
          return 'eight';
        case 9:
          return 'nine';
      }}
    if (number.length === 1) {
        console.log(number);
        return readTen(number);} else 
    if (number.length === 3) {
    return readTen(number[0]) + ' hundred ' + readTen(number[2])}
    }
