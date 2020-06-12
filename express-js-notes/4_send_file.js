const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.sendFile(__dirname + '/4_send_file.html')
})

app.listen(port)