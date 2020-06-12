const express = require('express')
const app = express()
const port = 8000
const html = `<!DOCTYPE html>
            <html lang="en-US">
            <body>hey</br>
            there</body>
            </html>`

app.get('/', (req, res) => {
    res.send(html);
})

app.listen(port)