let o = {name: 'thing'};
console.log(o.constructor === Object);

let n = 9;
console.log(n.constructor === Number);

function makeGang(  name) {
    this.name = name;
};

const Freelance = new makeGang('Freelance');
console.log('Freelance\'s constructor is ' + Freelance.constructor);