const str = 'Big Modern House with many burners.';
console.log(str.match(/[A-Z]/g));
const itt = str.matchAll(/[BM]/g)); // returns array
console.log(Array.from(itt));
