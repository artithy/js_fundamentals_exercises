let lines = 4;

for (let i = 1; i <= lines; i++) {
    let stars = "";
    let count = 2 * i;

    for (let j = 1; j <= count; j++) {
        stars += "* ";
    }

    console.log(stars);
}
