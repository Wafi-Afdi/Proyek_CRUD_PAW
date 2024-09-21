const mongoose = require("mongoose");

// Membuat skema untuk transaksi
const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Membuat model Transaction dari schema
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
