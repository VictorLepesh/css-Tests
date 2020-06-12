const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('root url')
})

app.get('/home', (req, res) => {
    res.send('home url')
})

app.get('/users', (req, res) => {
    res.send('users url')
})

app.listen(port)