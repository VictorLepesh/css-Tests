// a promise is like a commitment like a real life promise
// Promises are similar to callbacks, but cleaner

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("Success") // this method has a parameter 
    } else {
        reject("Failed")
    }
}) // has 2 parameters of resolve and reject

p.then((resolveMessage) => { // if resolved, the argument will be our string from resolve()
    console.log("This is the message " + resolveMessage)
}).catch((rejectMessage) => { // if we get a rejection AND this .catch method doesn't exist, we'll get a "uncaught exception: Failed" error
    console.log("this is a caught error " + rejectMessage)
})