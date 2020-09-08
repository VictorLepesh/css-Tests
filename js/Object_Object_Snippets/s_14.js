const turf = {name: 'Reeve Street', color: 'Gold'};

console.log(Object.isExtensible(turf));

Object.preventExtensions(turf);

console.log(Object.isExtensible(turf)); // Can you add more properties?