function csvToArray(csvString) {

    const rows = csvString.trim().split("\n");


    const result = rows.map(row => row.split(","));

    return result;
}


const csv = `name,age,city
Alice,22,New York
Bob,30,London
Charlie,25,Dhaka`;

const array = csvToArray(csv);
console.log(array);
