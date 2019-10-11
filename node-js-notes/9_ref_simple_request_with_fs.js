const http = require("http");
const qs = require("querystring");
const fs = require("fs");
const port = 8000;

let form = "";
fs.readFile("9_form.html", (err, data) => {
    form = data;
})

let tooLargeResponse = "";
fs.readFile("9_toolarge.html", (err, data) => {
    tooLargeResponse = data;
})

let methodNotSupported = "";
fs.readFile("methodNotSupported.html", (err, data) => {
    methodNotSupported = data;
})

const passUsernameToClient = (username) => {
    let str = ""
    fs.readFile("9_passUserToClient.html", (err, data) => {
        str = data
        console.log(data);
    })
    let userlabelLeng = "username: ".length;
    let usernamePosition = str.indexOf("username: ") + userlabelLeng;
    let firstSlice = str.slice(0, usernamePosition);
    let documentLeng = str.length;
    let secondSlice = str.slice(usernamePosition, documentLeng);
    console.log(username + " |0| " + userlabelLeng + " |1| " + usernamePosition + " |2| " + firstSlice + " |3| " + documentLeng + " |4| " + secondSlice);
    return firstSlice + str + secondSlice;
}
                            

http.createServer((request, response) => {
    if ( request.method === "GET" ) {
        response.writeHead(200, { "Content-Type" : "text/html"});
        response.end(form);
    } else if ( request.method === "POST" ) {
        let requestBody = ""
        request.on("data", (data) => { 
            console.log(requestBody);
            requestBody = String(data);
            if (requestBody.length > 1e7 ) {
                response.writeHead(413, "Request is too large", { "Content-Type" : "text/html" });
                response.end(tooLargeResponse);
            }
        });
        request.on("end", () => {
            let formData = qs.parse(requestBody); // Will give us the value from <input> but leave out <input>'s name
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