function isMatch(obj1, obj2) {
    const keys = Object.keys(obj2);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 1, b: 2, c: 3 };


console.log(isMatch(object1, object2));