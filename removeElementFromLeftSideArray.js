function removeFromLeft(arr, count) {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    if (typeof count !== 'number' || count < 0) {
        throw new Error('Count must be a non-negative number');
    }


    return arr.slice(count);
}


const myArray = [1, 2, 3, 4, 5, 6];
const countToRemove = 3;

const result = removeFromLeft(myArray, countToRemove);
console.log(result); 
