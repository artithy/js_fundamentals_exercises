const obj1 = { name: "Tithy" };
const obj2 = { age: 20 };
const combined = {};

const keys1 = Object.keys(obj1);
for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    combined[key] = obj1[key];
}


const keys2 = Object.keys(obj2);
for (let i = 0; i < keys2.length; i++) {
    let key = keys2[i];
    combined[key] = obj2[key];
}

console.log("Combined object:", combined);
