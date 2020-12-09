const person = {
    name: 'todd',
    mood: 'cry'
}

const otherPerson = Object.create(person);

console.log(otherPerson);  // You won't see properties this way.
console.log(otherPerson.name + ' ' + otherPerson.mood);