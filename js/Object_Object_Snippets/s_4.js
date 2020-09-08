let obj = {} 

Object.defineProperty(obj, 'key', {value: 'static'})

console.log(obj.key) // key: static is hidden because enumerable: false

let obj2 = {}

Object.defineProperty(obj2, 'carName', {
    enumerable: true, // If true, a key/value pair will pop up from 2nd argument and value key's value.
    configurable: true,
    writable: false,
    value: 'Admiral'
})

obj2.be = 2;
obj2.carName = 'Sultan'; // doesn't do anything, unless writable is true.

console.log(obj2)
console.log(obj2.carName)

//unsure on how to set/get obj2.carName