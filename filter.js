function filter(arr) {
    return arr.filter(num => num > 5);
}

console.log(filter([5, 7, 11, 52, 9, 10, 8, 6, 4, 3, 2, 1, 0]));

// output 
// [7, 11, 52, 9, 10, 8, 6]