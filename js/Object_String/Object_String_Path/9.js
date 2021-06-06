const c = 'é';
console.log(c.localeCompare('e'));
console.log(c.localeCompare('e', 'en', {sensitivity: 'base'}));