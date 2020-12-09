'use strict';
const npc = {health: 100};
Object.seal(npc);

npc.health = 106; // You can reassign properties. Can't delete but can assign undefined and another value back after. Can't add more properties.
console.log(Object.isSealed(npc));
npc.health = undefined; // This will NOT remove the descriptors, so the property still exists.
npc.health = 200;
console.log(npc.health);


// The configurable descriptor becomes configurable: false
// The writable descriptor becomes locked.  If changed from false to true after seal then it throws an error.  If changed from true to false, then it does nothing.
// Objects are NOT made immutable