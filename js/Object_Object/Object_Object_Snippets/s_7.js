'use strict';
const bank = {balance: 100, staff: {amount: 1}};
console.log(Object.getOwnPropertyDescriptor(bank, 'balance'));
Object.freeze(bank); // Makes balance become a "read" only property.
//bank.balance = 101;
console.log(bank)
console.log(Object.getOwnPropertyDescriptor(bank, 'balance'));
console.log(bank.balance);
// Reassigning, deleting and adding/extending properties don't work and redefining descriptors will not work for frozen properties.
// Makes writeable and configurable descriptors false.
// Object.defineProperty will not work to redefine frozen properties.
// console.log(delete bank.balance); will not work
// bank.name = 'big bank'; will not work

// IMPORTANT: Objects are made IMMUTABLE

bank.staff.amount = 3; // This will work because .freeze is shallow and not constant.
Object.freeze(bank.staff); // This will still work.