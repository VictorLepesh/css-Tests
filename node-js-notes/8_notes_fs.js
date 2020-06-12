const http = require("http");
const fs = require("fs") // File System

http.createServer((req, res) => {
    fs.readFile("8_demo.html", (error, data) => {
        res.writeHead(200, { "Content-Type" : "text/html" });
        console.log('' + data);
        res.end(data);
    })
}).listen(8000);


// All the methods to create a new js file
fs.appendFile()
fs.open()
fs.writeFile()

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
}); 

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
}); 


fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
}); 

//  All methods to just update a file

// Will put at the end of the file or "append"
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
}); 

// Will erase and replace what's in the file with 2nd arg
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
}); 


// The method to delete a file
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
}); 


// The method to rename a file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
}); 