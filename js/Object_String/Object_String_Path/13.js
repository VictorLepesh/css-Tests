const str = 'blue is the new blue';
console.log(str.replace('blue', 'orange'));
console.log(str.replace(/blue/, 'orange'));
console.log(str.replaceAll('blue', 'orange'));
console.log(str.split(' '), str.split(' ').join(' '));