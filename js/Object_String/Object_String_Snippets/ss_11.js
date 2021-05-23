const str = 'Big Modern House with many burners.';
const regex = /[A-Z]/g;
console.log(str.match(regex));
const itt = str.matchAll(regex); // returns array
console.log(Array.from(itt));
console.log(str.search(/[^\w\s]/g));
console.log(str.split(' ', 5));