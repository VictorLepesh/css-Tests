const e1 = '\u00e9';
const e2 = '\u0065\u0301';
console.log(e1 === e2, Object.is(e1, e2));
console.log(e1.normalize('NFC') === e2.normalize('NFC'));