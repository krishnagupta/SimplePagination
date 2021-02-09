var express = require('express')
var cors = require('cors')
var fetch = require('node-fetch')

var app = express()

app.use(cors())


app.get('/', async (req, res) => {
    console.log('req=====>', req.query)
    var response = await fetch(`https://gorest.co.in/public-api/users?page=${req.query.page}`)
    var data = await response.json()
    res.send(data)
})

app.listen(8080, () => {
    console.log('Server is running')
})