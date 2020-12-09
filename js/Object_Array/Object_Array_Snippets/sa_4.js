const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// arr.copyWithin(targetIndex, start, end)
console.log(arr.copyWithin(2)); // it will start copying the whole thing from index 2

console.log(arr); //Actually mutates(changes) the array

// Copies from 2nd half to the 1st half.  1st argument is where copied part goes.  2nd argument is where copied part starts
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arr1.copyWithin(0, 8))

// Copy ends at 3rd argument, copy moves to target, copy ends at its last index.
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arr2.copyWithin(0, 7, 9))

