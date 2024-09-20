const express = require("express");
const router = express.Router();
const {
  addTransaction,
  getTransactions,
  deleteTransaction,
  getFilteredTransactions,
  updateTransaction,
} = require("../controllers/transactionController");

// Route untuk menambah transaksi baru
router.post("/transactions", addTransaction);

// Route untuk mendapatkan semua transaksi
router.get("/transactions", getTransactions);

// Route untuk filter transaksi berdasarkan kategori
router.get("/transactions/filter", getFilteredTransactions);

// Route untuk mengupdate transaksi berdasarkan ID
router.put("/transactions/:id", updateTransaction);

// Route untuk menghapus transaksi berdasarkan ID
router.delete("/transactions/:id", deleteTransaction);

module.exports = router;
