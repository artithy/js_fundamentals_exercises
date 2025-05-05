function updateString(str, func) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += func(str[i], i);
    }
    return result;
}


function toUpperCase(char) {
    return char.toUpperCase();
}


let original = "hello";
let updated = updateString(original, toUpperCase);

console.log("Original:", original);
console.log("Updated :", updated);
