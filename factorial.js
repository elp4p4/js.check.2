const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(5));

// output 
// 120

// ******************************************* //

function factorialRecursive(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));

// output 
// 120

// ******************************************* //

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// output 
// 120
