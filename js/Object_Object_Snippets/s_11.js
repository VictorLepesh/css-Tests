const hand = {}
const fingers = Symbol(3);
const action = Symbol.for('bending');

hand[fingers] = 'localCount';
hand[action] = 'globalAction';

console.log(hand);

const result = Object.getOwnPropertySymbols(hand);

console.log(result);