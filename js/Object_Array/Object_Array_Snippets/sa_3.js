const obj = {f: true};
const arr1 = ['1'];
const arr2 = ['2'];
const arr3 = arr.concat(arr1, arr2, obj); // can concat more than one
console.log(arr3);
obj.f = false;  // Objects will show change regardless.
console.log([].concat(arr, arr1, arr2)); // can use concat with []