function numberToDigitArray(num) {

    return num.toString().split('').map(Number);
}


const number = 12345;
const digitArray = numberToDigitArray(number);
console.log(digitArray); 
