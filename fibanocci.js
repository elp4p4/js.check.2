function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    var f = [0, 1];

    for (var i = 2; i < n; i++) {
        var nextNumber = f[i - 1] + f[i - 2];
        f.push(nextNumber);
    }

    return f;
}

console.log(fibonacci(10));

// output
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]