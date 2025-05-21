function modifyString(str) {
    let start = 0;
    let end = str.length;

    if (str[0] === 'P') {
        start = 1;
    }

    if (str[str.length - 1] === 'P') {
        end = end - 1;
    }

    if (start === 0 && end === str.length) {
        return str;
    }

    return str.substring(start, end);
}

console.log(modifyString("PythonP"));

