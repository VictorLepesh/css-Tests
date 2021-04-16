const arr = ['a', 'b', 'c', 'd'];
console.log(arr.find((v, i, a) => v > 'b'));
console.log(arr.findIndex((v, i, a) => v > 'a'));
console.log(arr.includes('d'));