let userController = require('../controllers/user.controller')
const express = require('express')
const router = express.Router()


var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env]

const BASE_URL = config.server.BASE_URL

const apiAdapter = require('../../adapter')
const api = apiAdapter(BASE_URL)


// POST /user
router.post('/user/', userController.createUser, (request, response)=>{
	api.post(request.path).then(res=>{
		response.send(res.data)
	})
})

//GET /user
router.get('/user',userController.getUser, (request, response)=>{
	api.post(request.path).then(res=>{
		response.send(res.data)
	})
})

module.exports = router