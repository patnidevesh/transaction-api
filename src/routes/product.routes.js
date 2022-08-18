let productController = require('../controllers/product.controller')
const express = require('express')
const router = express.Router()

var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env]

const BASE_URL = config.server.BASE_URL

const apiAdapter = require('../../adapter')
const api = apiAdapter(BASE_URL)

// POST /product
router.post('/product/', productController.addProduct, (request, response)=>{
	api.post(request.path).then(res=>{
		response.send(res.data)
	})
})

// GET product/all
router.get('/product/all', productController.getAllProducts, (request, response)=>{
	api.get(request.path).then(res=>{
		response.send(res.data)
	})
})

// GET product by name
router.get('/product/name', productController.getProductByName, (request,response) => {
	api.get(request.path).then(res=>{
		response.send(res.data)
	})
})

// PATCH product by name
router.patch('/product/name', productController.updateProduct, (request,response) => {
	api.get(request.path).then(res=>{
		response.send(res.data)
	})
})

module.exports = router