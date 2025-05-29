let numbers = [23, 45, 12, 67, 34, 89, 5, 9, 100, 3, 28, 56];

if (numbers.length < 10) {
    console.log("Array has fewer than 10 elements.");
} else {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    console.log("10th smallest number is:", numbers[9]);
}
