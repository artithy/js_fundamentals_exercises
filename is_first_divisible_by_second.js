
let num1 = 15;
let num2 = 5;


if ((num1 * 1 === num1) && (num2 * 1 === num2)) {
    if (num2 === 0) {
        console.log('Division by zero is not allowed.');
    } else {
        if (num1 % num2 === 0) {
            console.log(num1 + ' is divisible by ' + num2);
        } else {
            console.log(num1 + ' is NOT divisible by ' + num2);
        }
    }
} else {
    console.log('Both inputs must be numbers.');
}
