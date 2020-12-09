const defaultCharacter = {id: 1, money: 100};
const obj = Object.create(defaultCharacter);
Object.defineProperties(obj, {
    id: {
        value: 2,
        enumerable: true,
        configurable: true,
        writable: true
    },
    money: { // get() and set() are accessors, accessors cannot have value: and writable: attributes.
        configurable: true,
        enumerable: true,
        get: () => {  // the only known way to define a getter and setter here are with arrow functions.
            return this.money;
        },
        set: (newMoney) => {
            this.money = newMoney + 1;
        }
    }
})
console.log(Object.getOwnPropertyDescriptor(obj, 'money'));
obj.money = 100;
console.log(obj.money);
