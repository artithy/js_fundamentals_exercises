let arr = [1, 2, 3, 4, 5];
let n = 2;

let result;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (i === n) {
        result = arr[i];
        found = true;
        break;
    }
}


if (found) {
    console.log("The", n, "th element is:", result);
} else {
    console.log("Invalid index. Please enter a number between 0 and", arr.length - 1);
}
