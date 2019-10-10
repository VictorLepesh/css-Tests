const http = require("http");
const port = 8000;
const str = "<!DOCTYPE html>" 
    + "<html lang=\"en-US\">"
    + "<p>Success?</p>"
    + "<p>Second line?</p>"
    + "</html>";

http.createServer((request, response) => {
    response.writeHead(200, "passed", { "Content-Type" : "text/html"});
    response.end(str);
}).listen(port);