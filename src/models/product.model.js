const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
	__v: { type: Number, select: false},
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: 1
    },
    category: {
        type: String,
        required: false
    },
    quantity: {
    	type:Number
    }
});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;