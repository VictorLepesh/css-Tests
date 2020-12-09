const woodenBox = { slot1: 'Pistol', sloth2: 'Deagle'};
const metalBox = { slot3: 'M4', sloth4: 'AK-47'};

Object.assign(woodenBox, metalBox); // Assigns all properties from 2nd arguem. to 1st arguem.

console.log(woodenBox);