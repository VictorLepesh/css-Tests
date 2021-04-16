const arr = [1, 'a', new Date('1 Jan 1999 20:25:10 UTC')];
console.log(arr.toLocaleString('en', { timeZone: 'UTC' }));
