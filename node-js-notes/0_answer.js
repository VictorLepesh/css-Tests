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
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        response.end(form);
    } else if ( request.method === "POST" ) {
        let requestBody = qs.parse(data);
        if ( requestBody > 1e7 )
    }
})