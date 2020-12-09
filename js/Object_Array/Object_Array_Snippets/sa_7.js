const arr1 = [1, 2, 3, 4]; 

console.log(arr1.fill(6)); // See's it as fill(6, 0, 3), last 2 values are start to finish.
console.log(arr1); // Method is mutable

const arr2 =  [1, 2, 3, 4]; 
console.log(arr2.fill(5, 2)); // fill index 2 to end with the integer 5.

const arr3 =  [1, 2, 3, 4, 5, 6]; 
console.log(arr3.fill(5, 2, 4)) // fill indices 2-4 with the integer 5