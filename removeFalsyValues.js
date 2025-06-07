let input = [0, 1, false, 2, '', 3, null, undefined, NaN];
let cleanedArray = [];
for (let i = 0; i < input.length; i++) {
    let item = input[i];
    if (item) {
        cleanedArray[cleanedArray.length] = item;
    }
}
console.log(cleanedArray);

