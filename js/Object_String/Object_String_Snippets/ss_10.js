const a = 'réservé';
const b = 'RESERVE';
console.log(a.localeCompare(b));
console.log(a.localeCompare(b, 'en', { sensitivity: 'base'}));