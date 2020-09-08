const bank = {
    total: 2323784923
};

console.log(Object.isFrozen(bank));

Object.freeze(bank);

console.log(Object.isFrozen(bank));