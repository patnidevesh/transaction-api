let ProductModel = require('../models/product.model')

var addProduct = function(request, response){
	/* Example Request Body
    *  {
    *      price: 10,
    *      name: "Product-1",
    *      description: "This is product description",
    *      category: "Category-1",
    *	   quantity: 5
    *  }
    */
	let payload = {
		name: request.body.name,
		price: request.body.price,
		category: request.body.category,
		description: request.body.description,
		quantity: request.body.quantity
	}

	if(payload.category.length === 0){
		return res.status(500).send({"message":"Categories field cannot be empty"})
	}
	
	let product = new ProductModel(payload)

	product.save()
		.then(result => {
			if(result){
				response.status(201).send({
					"message": "Product added successfully",
					"product":{
						"name":payload.name,
						"category":payload.category
					}
				})
			}else{
				response.status(404).send({
					"result": "Failed",
					"message": `Product ${query.name} addition Failed`
				})		
			}
		})
		.catch(error => {
			console.log("Error in saving the product", error)
			response.status(500).json({
				"result": "Error",
				"message": error.message
			})
		})
}

var getProductByName = function(request, response){
	
	var query = {
		name : request.body.name 
	}

	ProductModel.findOne(query).lean().exec()
		.then(product => {
			if(product){
				response.status(201).json(product)
			}else{
				response.status(404).json({
					"result": "Failed",
					"message": `Product ${query.name} not found. Please pass correct name`
				})
			}
		})
		.catch(error => {
			console.log("Error in getting product by id", error)
			response.status(500).json({
				"result": "Error",
				"message": error.message
			})
		})
}

var getAllProducts = function(request, response){
	ProductModel.find({}).lean().exec()
		.then(result => {
			response.status(201).json(result)
		})
		.catch(error => {
			console.log("Error in getting all products", error)
			response.status(500).json({
				"result": "Error",
				"message": error.message
			})
		})
}


var updateProduct = function(request, response){
	var query = {
		name: request.params.name
	}

	ProductModel.findOneAndUpdate(query,
		request.body, 
		{ new: true })
	.exec()
		.then(result => {
			if(result){
				response.status(201).json({
					"result": "Success",
					"message": `Product ${query.name} updated successfully`
				})
			}else{
				response.status(404).json({
					"result": "Failed",
					"message": `Product ${query.name} not found. Please pass correct name in params`
				})
			}
		})
		.catch(error => {
			console.log("Error in fetch by category",error)
			response.status(500).json({
				"result": "Error",
				"message": error.message
			})
		})
}


module.exports = {
	addProduct: addProduct,
	getProductByName: getProductByName,
	getAllProducts: getAllProducts,
	updateProduct: updateProduct
}