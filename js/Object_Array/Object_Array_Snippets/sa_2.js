// Gets all properties/methods that are exluded from "with" bindings
console.log(Object.keys(Array.prototype[Symbol.unscopables])); 
// ["copyWithin", "entries", "fill", "find", "findIndex", 
//  "includes", "keys", "values"]

var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e

// Just returns array constructor
console.log(Array[Symbol.species]); 