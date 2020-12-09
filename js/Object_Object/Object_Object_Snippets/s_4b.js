// 'use strict'; DOES throw errors for writability.
const obj = {con: 1, writ: 2};
Object.defineProperty(obj, 'writ', {
    value: obj.con,
    enumerable: true,
    configurable: true,
    writable: true
});
obj.writ = 222;
console.log(obj.writ);

// Object.seal(obj); prevents writeable from being changed from current val
Object.defineProperty(obj, 'writ', {writable: false});
console.log(Object.getOwnPropertyDescriptor(obj, 'writ'));
obj.writ = 2482;
console.log(obj.writ);