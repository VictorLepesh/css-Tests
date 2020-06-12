// for a quick test of React and static files from NodeJS
// npm install node-static
// add the following
const file = new static.Server('location/of/build');
http.createServer((request, response) => {
    request.addListener('end', () => {
        file.serve(request, response); 
    }).resume();
}).listen(port);