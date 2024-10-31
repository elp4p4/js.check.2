const arr = [9, 12, 34, 24, 130];
function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(arr))

// output 
// 209