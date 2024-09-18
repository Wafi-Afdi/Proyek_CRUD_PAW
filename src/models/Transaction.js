const mongoose = require('mongoose');

// Membuat skema untuk transaksi
const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String, // 'income' atau 'expense'
        enum: ['income', 'expense'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Membuat model Transaction dari schema
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
