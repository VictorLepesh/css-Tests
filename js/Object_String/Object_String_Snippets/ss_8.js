const str = 'some way home';
console.log(str.startsWith('way', 5), str.endsWith('hom', 12)) 
// endsWith 2nd argument defaults to str.length, you limit the length with this
// startsWith 2nd argument defaults to 0