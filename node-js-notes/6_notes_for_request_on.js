import { request } from "http";


// https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_createserver_options_requestlistener
http.createServer() // Returns a new instance of http.server

// https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_incomingmessage
http.createServer(http.IncomingMessage/request) // Better known as a request
http.IncomingMessage // An object made internally from http.server as its first argument

// https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_serverresponse
http.createServer(request, http.ServerResponse)
http.ServerResponse // created internally by http.server as second argument

request.on("data", someFunction) // .on method binds the data event with callback func
"data" // an event that fires when data is consumed

request.on("end", someFunction) // .on method binds to an "end" event with a callback
"end" 
