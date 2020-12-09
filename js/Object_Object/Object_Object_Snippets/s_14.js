'use strict';
const turf = {name: 'Reeve Street', color: 'Gold'};
Object.preventExtensions(turf);
turf.color = 'Brown'; // can reassign
delete turf.color; // can remove 
console.log(turf.color);
//turf.color = 'Blue'; // cannot add new
//turf.income = 4000 // cannot add new
// writable and configurable is true still
// can redefine property descriptors

console.log(Object.isExtensible(turf));
Object.defineProperty(turf, 'name', {
    value: 'bill st',
    enumerable: true,
    configurable: true,
    writable: true
});
console.log(Object.getOwnPropertyDescriptor(turf,'name'))