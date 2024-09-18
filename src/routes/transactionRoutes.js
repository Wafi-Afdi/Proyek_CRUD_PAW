const express = require('express');
const router = express.Router();
const {
    addTransaction,
    getTransactions,
    deleteTransaction
} = require('../controllers/transactionController');

// Route untuk menambah transaksi baru
router.post('/transactions', addTransaction);

// Route untuk mendapatkan semua transaksi
router.get('/transactions', getTransactions);

// Route untuk menghapus transaksi berdasarkan ID
router.delete('/transactions/:id', deleteTransaction);

module.exports = router;
