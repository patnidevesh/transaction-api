const mongoose = require('mongoose');
const transactionSchema = mongoose.Schema({
	__v: { type: Number, select: false},
    email: {
        type: String,
        required: true
    },
    data: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    product: {
        type: Array,
        default: []
    }
}, { timestamps: true });
const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;