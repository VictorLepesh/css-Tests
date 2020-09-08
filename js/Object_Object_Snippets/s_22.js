function MyNumberType(n) {
    this.number = n;
}

MyNumberType.prototype.valueOf = function() {
    return this.number;
}

const object1 = new MyNumberType(30);

console.log(object1 + 6);