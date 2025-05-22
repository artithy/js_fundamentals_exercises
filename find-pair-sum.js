let arr = [10, 20, 10, 40, 50, 60, 70];
let target = 70;

let found = false;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log(`Indices: ${i}, ${j}`);
            found = true;
            break;
        }
    }
    if (found) break;
}
