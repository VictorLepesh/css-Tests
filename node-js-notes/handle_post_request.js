const http = require("http")
const qs = require("querystring")
const formOutput = "<html><body>Hello there mannnnnnn error <body><html>"
const port = 8124;
let count = 0;

http.createServer((request, response) => {
    if (request.method === "GET") {
        count = count + 1;
        response.writeHead(404, "not foundddd", {"Content-Type" : "text/html"})
        response.end(formOutput + count);
    }
}).listen(port);