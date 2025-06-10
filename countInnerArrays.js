let arr2 = [2, 8, [6, 3, 3], [4], [5], [3, 4, [5, 4]]];

let count2 = 0;

for (let i = 0; i < arr2.length; i++) {
    if (Array.isArray(arr2[i])) {
        count2 = count2 + 1;
    }
}

console.log("Number of arrays inside the said array:", count2);
