function filter(arr, condition) {
    return arr.filter(condition);
}

const numbers = [5, 7, 11, 52, 9, 10, 8, 6, 4, 3, 2, 1, 0];
const greaterthanfive = filter(numbers, num => num > 5);

console.log(greaterthanfive);

// output 
// [7, 11, 52, 9, 10, 8, 6]