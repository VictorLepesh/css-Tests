// Doesn't do anything 'use strict';
const obj = {con: 1, writ: 2};
Object.defineProperty(obj, 'con', {
    value: obj.con,
    enumerable: true,
    configurable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(obj, 'con'));
obj.con = '2';
//delete obj.con;
console.log(obj.con);

// When configurable: false you can never make configurable: true
// When configurable: false you can never change enumerablility again.

// When configurable: false you CAN change value and writability 
Object.defineProperty(obj, 'con', {
    configurable: false,
    enumerable: false
});
console.log(obj.con);