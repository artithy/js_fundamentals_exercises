function arrayDifference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

const difference1 = arrayDifference(array1, array2);
const difference2 = arrayDifference(array2, array1);

console.log("Difference (array1 - array2):", difference1);
console.log("Difference (array2 - array1):", difference2); 
