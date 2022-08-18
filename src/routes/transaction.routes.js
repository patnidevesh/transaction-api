let transactionController = require('../controllers/transaction.controller')
const express = require('express')
const router = express.Router()

var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env]

const BASE_URL = config.server.BASE_URL

const apiAdapter = require('../../adapter')
const api = apiAdapter(BASE_URL)



// POST /pay
router.post('/pay/', transactionController.createTransaction, (request, response)=>{
	api.post(request.path).then(res=>{
		response.send(res.data)
	})
})

// GET /transaction/user
router.get('/transaction/user', transactionController.getTransactionHistoryByUser, (request, response)=>{
	api.post(request.path).then(res=>{
		response.send(res.data)
	})
})

// GET /transaction/all
router.get('/transaction/all', transactionController.getAllTransactionHistory, (request, response)=>{
	api.post(request.path).then(res=>{
		response.send(res.data)
	})
})

module.exports = router