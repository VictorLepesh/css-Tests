const http = require("http");
const qs = require("querystring");
const fs = require("fs");
const events = require("events");
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

const insertInStringifiedFile = (fileString, locationString, insertStr) => {
    let SliceBeforeInsert = fileString.slice(0, fileString.indexOf(locationString) + locationString.length);
    let SliceAfterInsert = fileString.slice(SliceBeforeInsert.length, fileString.length);
    return SliceBeforeInsert + insertStr + SliceAfterInsert;
}

const passUsernameToClient = (fileStr, location, username) => {
    fileStr = fileStr.replace(/username: /, "username: " + username);
    console.log(fileStr);
    return fileStr;
}


http.createServer((request, response) => {
    if ( request.method === "GET" ) {
        response.writeHead(200, { "Content-Type" : "text/html"});
        response.end(form);
    } else if ( request.method === "POST" ) {
        let requestBody = ""
        request.on("data", (data) => { 
            requestBody = String(data);
            if (requestBody.length > 1e7 ) {
                response.writeHead(413, "Request is too large", { "Content-Type" : "text/html" });
                response.end(tooLargeResponse);
            }
        });
        request.on("end", () => {
            let formData = qs.parse(requestBody); 
            response.writeHead(200, { "Content-Type" : "text/html" });
            let control = false;
            fs.readFile("9_passUserToClient.html", (err, data) => {
                fileStr = String(data);
                const dataUsername = passUsernameToClient(fileStr, "username: ", formData.userName);
                response.end(dataUsername);
            }) 
        })
    } else {
        response.writeHead(405, "Method not supported", { "Content-Type" : "text/html" });
        response.end(methodNotSupported);
    }
}).listen(port);