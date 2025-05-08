let numbers = [45, 32, 67, 23, 89, 38, 56, 12];
let value = 38;

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= value) {
        count++;
    }
}

let percentile = (count / numbers.length) * 100;

console.log("Less than or equal to", value, "=", count, "numbers");
console.log("Percentile =", percentile, "%");
