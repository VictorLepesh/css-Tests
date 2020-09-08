const car = {};

Object.defineProperties(car, {
    'name': {
        value: 'Ambassador',
        enumerable: false,
        configurable: false
    },
    'topSpeed': {
        value: '100',
        enumerable: false,
        configurable: false 
    }
})

console.log(car.name + ' ' + car.topSpeed)