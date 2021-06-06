const str = '\0 \' \" \\ \n zz \r p \t pe\bs'
console.log('\0'.length);
console.log(str);


// \r Cariage Return basically erases everything on the line it's on in the string before it
// if there is another Cariage Return on the same line, it'll just put the last CR in the beginning and delete all cbaracters from first UNTIL the last.

// \v is vertical tab(doesnt work), \f just doesn't work
// \b needs character after it
//https://stackoverflow.com/questions/3091524/what-are-carriage-return-linefeed-and-form-feed

// DEPRECATED
/*
    \v \f
*/
