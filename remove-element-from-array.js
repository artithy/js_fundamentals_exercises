let arr = [2, 5, 9, 6];
let Remove = 5;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== Remove) {
        newArr.push(arr[i]);
    }
}

console.log(newArr); 