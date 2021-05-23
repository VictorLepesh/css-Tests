const str = '\0 \' \" \\ \n zz \r \v p \t pe\bs \f '
console.log('\0'.length);
console.log(str);



// \v is vertical tab(doesnt work), \f just doesn't work
// \b needs character after it
//https://stackoverflow.com/questions/3091524/what-are-carriage-return-linefeed-and-form-feed
