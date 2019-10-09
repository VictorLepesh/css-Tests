const http = require("http")
const fs = require("fs") // this is what we need to read the HTML file
const port = 3001

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/html" })
    fs.readFile("index.html", (error,data) => {
        if (error) {
            res.writeHead(404)
            res.write("Error: Files not found")
        } else { // if there is no error
            res.write(data) // data is all the data from index.html
        }
        res.end()
    })

    //res.write("Hello Node");
    //res.end()
})

server.listen(port, (error) => {
  if (error) {
    console.log("Something's wrong", error)
  } else {
    console.log("Server is listening on port " + port)
  }
})

