const arr = ['a' ,'b'];
const itt = arr[Symbol.iterator]();
console.log(itt.next().value);
console.log(itt.next().value);
console.log(itt.next().value);
