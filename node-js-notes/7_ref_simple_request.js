const http = require("http");
const qs = require("querystring");
const port = 8000;
const form = "<!DOCTYPE html>" +
                    "<html lang=\"en-US\">" +
                    "<form method=\"post\" action=\"respondWithUsername\">" +
                    "<fieldset>" +
                    "<input type=\"text\" name=\"userName\">" +
                    "<input type=\"submit\" value=\"Submit Username\">" +
                    "</fieldset>" +
                    "</form>" +
                "</html>";
const tooLargeResponse = "<!DOCTYPE html>" +
                            "<html lang=\"en-US\">" +
                            "<body>" +
                            "413: Request is too large" +
                            "</body>" +
                            "</html>";
const methodNotSupported = `<!DOCTYPE html>
                                <html lang="en-US">
                                <body>405: Method not supported</body>
                                </html>`;
const passUsernameToClient = (username) => {
    const str = `<!DOCTYPE html>
                <html lang="en-US">
                <head>
                    <meta charset="UTF-8">
                    <title>Username Response</title>
                <body>This is your username: ${username}</body>
                </html>`
    return str;
}
                            


http.createServer((request, response) => {
    if ( request.method === "GET" ) {
        response.writeHead(200, { "Content-Type" : "text/html"});
        response.end(form);
    } else if ( request.method === "POST" ) {
        let requestBody = ""
        request.on("data", (data) => {
            console.log(requestBody);
            requestBody += data; // Data needs a space to read something like userName=Bob
            console.log(data);
            console.log("" + requestBody);
            if (requestBody.length > 1e7 ) {
                response.writeHead(413, "Request is too large", { "Content-Type" : "text/html" });
                response.end(tooLargeResponse);
            }
        });
        request.on("end", () => {
            let formData = qs.parse(requestBody);
            response.writeHead(200, { "Content-Type" : "text/html" });
            let dataUsername = passUsernameToClient(formData.userName);
            response.write(form);
            response.write("</br></br>");
            response.end(dataUsername);
        })
    } else {
        response.writeHead(405, "Method not supported", { "Content-Type" : "text/html" });
        response.end(methodNotSupported);
    }
}).listen(port);