function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum([9, 12, 34, 24, 130]))

// output 
// 209