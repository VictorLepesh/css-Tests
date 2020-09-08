const gang = {name: 'Tunnel Snakes', color: 'Orange'};

const gangArray = Object.entries(gang);

console.log(gangArray);

const newChapter = Object.fromEntries(gangArray);

console.log(newChapter);


//Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));