function extractValuesByIndexes(arr, indexes) {
    return indexes.map(index => arr[index]);
}


const array = ['a', 'b', 'c', 'd', 'e'];
const indexes = [0, 2, 4];

const result = extractValuesByIndexes(array, indexes);
console.log(result);
