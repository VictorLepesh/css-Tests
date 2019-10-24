// slow way of adding up to

const addUpTo = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
let result = addUpTo(1000000000);
let t2 = performance.now();
console.log(`Total passed: ${(t2 - t1) / 1000} seconds.`);