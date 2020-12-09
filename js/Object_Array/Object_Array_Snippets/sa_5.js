const arr1 = ['1', '2', '3'];
const arrIterator = arr1.entries(); // Returns an array iterator

console.log(arrIterator.next().value);
console.log(arrIterator.next().value);
console.log(arrIterator.next().value);
console.log(arrIterator.next().value);  // It'll keep going until its last index.