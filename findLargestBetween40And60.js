function findLargestInRange(a, b) {

    if ((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) {

        return a > b ? a : b;
    } else {
        return "Both numbers must be in the range 40 to 60 inclusive.";
    }
}


console.log(findLargestInRange(45, 60));  
