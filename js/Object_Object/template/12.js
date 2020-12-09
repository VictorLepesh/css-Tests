'use strict';


obj.id = 2;
obj.name = 'bob';
Object.defineProperty(obj, 'id', { configurable: true, writable: true });
console.log(Object.getOwnPropertyDescriptor(obj, 'id'));
delete obj.id;