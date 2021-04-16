const arr = ['a', 'b', ['c', ['d']]];
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flatMap((v, i, a) => [v + v]));