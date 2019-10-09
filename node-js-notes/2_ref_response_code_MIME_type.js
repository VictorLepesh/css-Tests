const http = require("http")
const formOutput = "<html>Hello there from ref_2<html>"
const port = 8000;

http.createServer((request, response) => {
    response.writeHead(200, "This is an okay status message", {"Content-Type" : "text/html"})
    response.end(formOutput);
}).listen(port);