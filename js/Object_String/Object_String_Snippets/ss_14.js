const str = 'Turf is now blue, and only blue.';
console.log(str.replace('blue', 'orange'));
console.log(str.replace(/blue/, 'orange'));
console.log(str.replaceAll('blue', 'orange'));
console.log(str.split(' ', 5), str.split(' ', 5).join(' '));