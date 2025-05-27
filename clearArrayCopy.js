let originalArray = [1, 2, 3, 4, 5];

let copyArray = [];
for (let i = 0; i < originalArray.length; i++) {
    copyArray[i] = originalArray[i];
}

for (let i = copyArray.length - 1; i >= 0; i--) {
    copyArray.pop();
}

console.log("Original:", originalArray);
console.log("Emptied Copy:", copyArray);
