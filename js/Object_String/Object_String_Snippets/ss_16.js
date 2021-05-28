const str = new String('big');
const obj = {id: 'big'};
const arr = ['id', 'big'];
console.log(str.toString(), obj.toString(), arr.toString());
console.log(str.valueOf(), obj.valueOf(), arr.valueOf());
console.log(String(str), String(obj), String(arr));