const protoTurf = {color: '0, 0, 0'};
const turf = Object.create(protoTurf);

turf.name = 'Underway Rd.';

console.log(turf.hasOwnProperty());
console.log(turf.hasOwnProperty('name'));
console.log(turf.hasOwnProperty('color'));
console.log(turf.hasOwnProperty('random'));