const express = require('express')

const path = require('path')

const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'cacc1a3e0d3c4cff9f7551abc66c2476',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use('/', express.static(path.join(__dirname,'../client/index.html')))

app.use(express.static(path.join(__dirname, '../client')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..client/index.html'))
// })

// app.get('/js', (req, res) => {
//     res.sendFil(path.join(__dirname, '../client/main.js'))
// })

app.listen(port, () => {
    console.log('Docked at port' + port)
})

