function removeHTMLTags(str) {
    let result = "";
    let insideTag = false;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '<') {
            insideTag = true;
        } else if (char === '>') {
            insideTag = false;
        } else if (!insideTag) {
            result += char;
        }
    }

    return result;
}

const input = "<h1>Hello <span>World</span>!</h1>";
const output = removeHTMLTags(input);

console.log("Original:", input);
console.log("Cleaned :", output);
