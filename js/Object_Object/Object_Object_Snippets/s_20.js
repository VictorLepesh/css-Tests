const obj = {}

console.log(obj.toLocaleString()); // returns result of toString()

const date1 = new Date(Date.UTC(2020, 8, 10, 8, 30, 24))

console.log(date1.toLocaleString('ar-EG'))
console.log(date1.toLocaleString('de-DE'))
console.log(date1.toLocaleString())

