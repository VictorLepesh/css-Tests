const arr = [10, 40, 50];
const reducer = (acc, cur) => acc + cur + ''; // to show reduce starts from beginning and reduceRight starts from end
console.log(arr.reduce(reducer, 50));
console.log(arr.reduceRight(reducer, 50));


// reference
const arr1 = [['a', 'b'], ['c', 'd'], ['e', 'f']];
const reducer = (acc, cur) => acc.concat(cur);
console.log(arr1.reduceRight(reducer))