let User = require('../models/user.model')

var createUser = function(request, response){
	 /* Example Request Body
    *  {
    *      name: "user-1",
    *      email: "user1@gmail.com",
    *  }
    */
    const user = new User(request.body);
    user.save()
    	.then(result => {
    		response.status(201).json({
    			"result":"Success",
    			"message":"User created successfully"
    		})
    	})
    	.catch(error => {
    		console.log("Error in createUser",error)
			response.status(500).json({
				"result":"Error",
				"message":error.message
			})
		})
}

// find user by email 
var getUser = function(request, response){
	/* Example Request Body
    *  {
    *      email: "user1@gmail.com"
    *  }
    */
	var query = {
		email: request.body.email
	}
	User.findOne(query)
		.then(user => {
			if(user){
				response.json(user)
			}
			else{
				response.status(404).json({
					"result": "Failed",
					"message": "No User with email id found"
				})
			}
		})
		.catch(error => {
			response.status(500).json({
				"result":"Error",
				"message":error.message
			})
		})
}

module.exports = {
	createUser: createUser,
	getUser: getUser
}