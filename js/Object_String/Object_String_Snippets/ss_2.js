console.log(String.fromCharCode(189, 43, 190, 61));
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
const filePath = String.raw`No more escape sequences like \n \t \0 \b`;
console.log(`Data:  ${filePath}`);