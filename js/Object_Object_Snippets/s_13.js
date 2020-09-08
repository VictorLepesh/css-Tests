console.log(Object.is(2, 2));

console.log(Object.is({sign: 'bright'}, {sign: 'bright'}))
console.log({sign: 'bright'} == {sign: 'bright'})
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN)) // Good for NaN, that's it.