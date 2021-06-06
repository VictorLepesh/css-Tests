console.log(String.fromCharCode(389, 1731), String.fromCodePoint(389, 1731));
console.log(String.raw`\t \n some\b \t`);
const str = 'swig☃★♲';
console.log(str.charAt(6), str.charCodeAt(6), str.codePointAt(6));

/* charCodeAt fromCharCode = UTF-16 code unit */
/* codePointAt fromCodePoint = Unicode */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt 