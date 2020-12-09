const print = (item, i, arr) => { // item = value
    console.log(item, i, arr)
    return item > 0;
}

// .every doesn't mutate(change) the array it's called from
const arr1 = [10, 11, 12, 18, 24]; // if just 1 of the values doesn't meet the condition, it's false;
//console.log(arr1.every(print));

const areAllPlayers = (member, i, arr) => {
    console.log(member, i, arr);
    return member.isHuman === true;
}
const gang = [
    {
        isHuman: true
    },
    {
        isHuman: true
    },
    {
        isHuman: true
    }
]

console.log(gang.every(areAllPlayers)); // There's another argument for "this" for callbacks we don't yet know