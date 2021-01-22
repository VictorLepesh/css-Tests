'use strict';


Object.defineProperty(obj, 'id', { configurable: true, writable: true });
console.log(Object.getOwnPropertyDescriptor(obj, 'id'));
obj.id = 2;
obj.name = 'bob';
delete obj.id;