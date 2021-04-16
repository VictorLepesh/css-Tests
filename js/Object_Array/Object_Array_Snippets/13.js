const arr = ['a', 'b', ['c', ['d', ['e']]]];
arr.forEach((v, i, a) => { // only changes values, doesn't return anything.
    console.log(v, i);
    console.log(a);
});
arr.map((v, i, a) => { // will return result with changed array
    console.log(v, i);
    console.log(a);
    return v = v + v;
});

// both are immutable.