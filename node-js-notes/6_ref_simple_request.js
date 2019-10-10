const http = require("http");
const qs = require("querystring");
const port = 8000;
// Enctype 
const formOne = "<html lang=\"en-US\">" +
                    "<form method=\"post\" action=\"inbound\" 
const formTwo = '<html><body>'
+ '<h1>XYZ Repository Commit Monitor</h1>'
+ '<form method="post" action="inbound" enctype="application/x-www-form-urlencoded"><fieldset>'
+ '<div><label for="UserName">User Name:</label><input type="text" id="UserName" name="UserName" /></div>'
+ '<div><label for="Repository">Repository:</label><input type="text" id="Repository" name="Repository" /></div>'
+ '<div><label for="Branch">Branch:</label><input type="text" id="Branch" name="Branch" value="master" /></div>'
+ '<div><input id="ListCommits" type="submit" value="List Commits" /></div></fieldset></form></body></html>';

http.createServer((request, response) => {
    response.writeHead(200, "OK", {"Content-Type" : "text/html"});
    response.write(formOne)
    response.write("</br></br></br>");
    response.end(formTwo);
}).listen(port);