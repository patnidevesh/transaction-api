let Transaction = require('../models/transaction.model')
let User = require('../models/user.model')
let Product = require('../models/product.model')

var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env]

const stripe = require('stripe')(config.stripe.SECRET_KEY)

var createTransaction = function(request, response){

	/* Example Request Body
	*    {
	*	    "product":"Product-1",
	*	    "payment_method":"card",
	*	    "email":"user-3@gmail.com",
	*	    "price":100
	*	}
    */

	var payload = {
		currency: 'inr',
		payment_method_types: request.body.payment_method,
		price:request.body.price,
		email: request.body.email,
		product: request.body.product
	}

	const paymentIntent = stripe.paymentIntents.create({
	  currency: payload.currency,
	  payment_method_types: [payload.payment_method_types],
	  amount: payload.price,
	  receipt_email: payload.email
	}).then(result => {
		var history = {
			transactionID:result.id,
			purchaseDate: result.created,
			product: payload.product
		}

		// updates user transaction history
		User.update(
			{email: payload.email}, 
			{$push: {
				history: history
			}
		},
		error => {
			if(error){
				return response.status(500).json({
					"status":"Failed",
					"message":error.message
				})
			}
			return result
		})
	}).then(result =>{
		const transactionPayload = {
			email : payload.email,
			data : payload,
			product : payload.product
		}
		const transaction = new Transaction(transactionPayload)
		transaction.save()
			.then(data =>{
				return response.status(201).json({
					"status":"Success",
					"result":transactionPayload
				})
			})
			.catch(error => {
				return response.status(500).json({
					"status":"Error",
					"message":error.message
				})
			})
	})
	.catch(error => {
		return response.json({
			"status":"Error",
			"message":error.message
		})
	})
}

var getTransactionHistoryByUser = function(request, response){
	var query = {
		email:request.body.email
	}

	User.findOne(query).lean().exec()
		.then(result => {
			return response.status(201).json({
				"email":result.email,
				"name":result.name,
				"history": result.history
			})
		})
		.catch(error => {
			return response.status(500).json({
				"status":"Error",
				"message":error.message
			})
		})
}

var getAllTransactionHistory = function(request, response){
	var transactions = []

	User.find({}).lean().exec()
		.then(result => {
			return response.status(201).json(result)
		})
		.catch(error => {
			return response.status(500).json({
				"status":"Error",
				"message":error.message
			})
		})
}

module.exports = {
	createTransaction: createTransaction,
	getTransactionHistoryByUser: getTransactionHistoryByUser,
	getAllTransactionHistory: getAllTransactionHistory
}