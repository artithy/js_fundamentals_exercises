const array1 = [1, 2];
const array2 = ['a', 'b'];

const result = [];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        result.push([array1[i], array2[j]]);
    }
}

console.log(result);
