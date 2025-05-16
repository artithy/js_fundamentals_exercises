let value = [1, 2, 3];

if (
    typeof value === "object" &&
    value !== null &&
    typeof value.length === "number" &&
    typeof value.splice === "function"
) {
    console.log("It is an array.");
} else {
    console.log("It is NOT an array.");
}
