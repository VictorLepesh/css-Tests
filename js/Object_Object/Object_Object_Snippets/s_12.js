const gangProto = {name: 'Undefined'};
const indianMafia = Object.create(gangProto);

indianMafia.name = 'Brazilian Mafia';

console.log(Object.getPrototypeOf(indianMafia));

const jamesGang = {data: 'James Gang'};

Object.setPrototypeOf(indianMafia, jamesGang); // Not good for performance

console.log(Object.getPrototypeOf(indianMafia))
console.log(defaultInfernus.isPrototypeOf(indianMafia)); // OOP syntax for checking is defaultInfernus is the prototype of mike