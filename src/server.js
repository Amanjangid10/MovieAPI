const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./envConfig')
const router = require('./route')

const startServer = () => {

    const app = express();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use( '/api', router)


    app.listen(PORT, (req, res) => {
        console.log(`serverStarted at ${PORT}`)
    })

}

startServer()