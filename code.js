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

function e(n)
{
    if(n == 0) return 1;
    else
    sum = 1;
    for (i = 1; i <= n; i++)
    {
        sum += 1.0 / factorial(i);
    }
    return sum;
}
