const obj = {
    height: 6
}

const descriptor = Object.getOwnPropertyDescriptor(obj, 'height');

console.log(descriptor);  // Returns property descriptor