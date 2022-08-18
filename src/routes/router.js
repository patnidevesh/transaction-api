var express = require('express');
var router = express.Router()

let productRoute = require('./product.routes')
let transactionRoute = require('./transaction.routes')	
let userRoute = require('./user.routes')

// Print the API called on console
router.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`)
	next()
})

router.use(productRoute)
router.use(transactionRoute)
router.use(userRoute)

module.exports = router