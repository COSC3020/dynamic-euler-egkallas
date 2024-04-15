const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(factorial(0) === 1);
assert(factorial(1) === 1);
assert(factorial(5) === 120);
assert(factorial(7) === 5040);


assert(e(10) === 2.7182818011463845);
assert(e(0) === 1);
assert(e(5) === 2.7166666666666663);
assert(e(1000) === 2.7182818284590455);
assert(e(666) === 2.7182818284590455);
