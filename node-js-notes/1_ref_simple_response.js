const http = require("http")
const port = 8000;

http.createServer((request, response) => {
    response.end("Hiii");
}).listen(port);