let arr = [43, 56, 23, 89, 88, 90, 99, 652];
let n = 4;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

let nthLargest = arr[n - 1];
console.log(nthLargest);
