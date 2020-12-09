let gangMember = {
    gang: 'Purples'
}
let turf = []
turf['points'] = 20

console.log(gangMember.propertyIsEnumerable('gang'))
console.log(turf.propertyIsEnumerable('points'))
console.log(turf.propertyIsEnumerable('total deaths'))