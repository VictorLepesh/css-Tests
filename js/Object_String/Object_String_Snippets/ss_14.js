const str = 'The fort is blue and the flags are blue.';
console.log(str.replace('blue', 'orange'));
console.log(str.replace(/blue/, 'black'));
console.log(str.replaceAll('blue', 'orange')); // we are on nodejs 12, we need node 15