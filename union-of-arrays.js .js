let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let union = [];

for (let i = 0; i < arr1.length; i++) {
    if (union.indexOf(arr1[i]) === -1) {
        union.push(arr1[i]);
    }
}

for (let i = 0; i < arr2.length; i++) {
    if (union.indexOf(arr2[i]) === -1) {
        union.push(arr2[i]);
    }
}

console.log(union.sort((a, b) => a - b));
