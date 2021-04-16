const arr = ['a', 'b', 'c'];
const entIt = arr.entries();
const keyIt = arr.keys();
const valIt = arr.values();
for (e of entIt) {
    console.log(e);
};
for (k of keyIt) {
    console.log(k);
};
for (v of valIt) {
    console.log(v);
};