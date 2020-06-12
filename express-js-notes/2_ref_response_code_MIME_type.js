const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send('Stuff')
})

app.listen(port);