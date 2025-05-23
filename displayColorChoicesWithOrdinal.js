let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let n = i + 1;
    let suffix;

    if (n % 100 >= 11 && n % 100 <= 13) {
        suffix = o[0];
    } else if (n % 10 === 1) {
        suffix = o[1];
    } else if (n % 10 === 2) {
        suffix = o[2];
    } else if (n % 10 === 3) {
        suffix = o[3];
    } else {
        suffix = o[0];
    }

    console.log(`${n}${suffix} choice is ${color[i]}.`);
}
