function factorial(n) {
    if (n <= 1) return 1;
    if (n == 2) return 2;
    var fact = 2;
    var j = fact + 1;
    while (j <= n) {
        fact = fact * j
        j++
    }
    return fact;
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}
