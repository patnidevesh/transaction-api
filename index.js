let express = require('express')
let app = express()

let router = require('./src/routes/router')
	
let path = require('path')
let bodyParser = require('body-parser')

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env]

let mongoConfig = require('./src/config/connection.utils')


app.use(bodyParser.json())

// mongoose connection
let mongooseConnect = mongoConfig.dbConnection

// Router
app.use(router)

// Declare location of static files
app.use(express.static(path.join(__dirname, 'public')))

//404 request not found error handler
app.use((req, res, next) => {
	res.status(404).send('Not Found')
})

// For 500 error
app.use((err, req, res, next) => {
	res.sendFile(path.join(__dirname,'public/500.html'))
})

const PORT = config.server.PORT || 3000
app.listen(PORT, () => console.log(`Server has started on ${PORT}`))

module.exports = app