import { request } from "http";


// https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_createserver_options_requestlistener
http.createServer() // Returns a new instance of http.server
// inherits from eventEmitter object

// https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_incomingmessage
http.createServer(http.IncomingMessage/request) // Better known as a request
http.IncomingMessage // An object made internally from http.server as its first argument

// https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_serverresponse
http.createServer(request, http.ServerResponse)
http.ServerResponse // created internally by http.server as second argument

// https://nodejs.org/docs/latest/api/events.html#events_emitter_on_eventname_listener
emitter.on(eventName, listener) 
// the .on method is a method from Node's Event Emitter class
// the eventName parameter is a string/symbol name of an event.
// the listener parameter is a callback function
// it returns an <eventEmitter> object

request.on("data", someFunction) 
// .on method binds the data event with callback func
"data" // an event that fires when data is consumed

request.on("data" ,somefunction(argumentData )) 
// arguementData is a hexadecimal object of <inputs> name attribute and <inputs> value. which can be converted into a string
// To check what data is from hexadecimal use, https://www.asciitohex.com/
// There's 127 total ASCII/ANSI characters.
// to convert argumentData to a string you can do
let argumentString += argumentData;
let argumentString = String(argumentData);

request.on("end", someFunction) // .on method binds to an "end" event with a callback
"end" 
let formData = qs.parse(argumentString); // Will give us the value from <input> but leave out <input>'s name
// argumentString is accessed from an outer block but reassigned in data.
