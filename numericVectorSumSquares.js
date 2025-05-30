let numbers = [15, 22, 30, 40, 10];
let sumOfSquares = 0;

for (let i = 0; i < numbers.length; i++) {
    let square = numbers[i] * numbers[i];
    sumOfSquares += square;
}

console.log("Sum of squares:", sumOfSquares);
