const Product  = require('./product.model');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    __v: { type: Number, select: false},
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true, 
        unique: 1,
        required: true
    },
    history: {
        type: [Product.Schema],
        default: [],
        unique:0
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;