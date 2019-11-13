// No loops involved, more mathmatical, not necessarily better.
// adds n + 1 in the parenetheses, multiplies by n then divides by 2.

const addUpTo = (n) => {
    return n * (n + 1) / 2;
}

let t1 = performance.now();
let result = addUpTo(1000000000);
let t2 = performance.now();
console.log(`Total passed: ${(t2 - t1) / 1000} seconds.`);

