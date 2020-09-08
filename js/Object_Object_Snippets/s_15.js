const npc = {health: 100};

console.log(Object.isSealed(npc));

Object.seal(npc);

npc.health = 106;

console.log(Object.isSealed(npc));
console.log(npc.health);