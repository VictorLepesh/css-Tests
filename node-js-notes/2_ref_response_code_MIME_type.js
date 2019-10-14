const http = require("http")
const port = 8000;

http.createServer((request, response) => {
    response.writeHead(200, "This is an okay status message", {"Content-Type" : "text/html"});
    response.end("");
}).listen(port);