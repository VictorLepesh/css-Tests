const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 8000

app.use(bodyParser())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/8_form.html')
})

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    console.log(req.body.aUsername + ' ' + req.body.aNumber + ' ' + req.body.aPassword)
    res.json(req.body)
})

app.listen(port)