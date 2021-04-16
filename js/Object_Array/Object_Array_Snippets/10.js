const arr = ['a', 'b', 'c'];
console.log(arr.every((v, i, a) => v < 'd'));
console.log(arr.some((v, i, a) => v < 'c'));
console.log(arr.filter((v, i, a) => v > 'a'));