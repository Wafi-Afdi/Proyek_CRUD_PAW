const Transaction = require("../models/Transaction");

// Menambah transaksi baru
exports.addTransaction = async (req, res) => {
  try {
    const { name, description, category, amount, date } = req.body;

    const transaction = new Transaction({
      name,
      description,
      category,
      amount,
      date,
    });

    await transaction.save();

    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Mendapatkan semua transaksi
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Filter transaksi
exports.getFilteredTransactions = async (req, res) => {
  try {
    const { type, category, minAmount, maxAmount, startDate, endDate } =
      req.query;
    let query = {};

    if (type) query.type = type;
    if (category) query.category = category;
    if (minAmount || maxAmount) {
      query.amount = {};
      if (minAmount) query.amount.$gte = parseFloat(minAmount);
      if (maxAmount) query.amount.$lte = parseFloat(maxAmount);
    }
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    const transactions = await Transaction.find(query);

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Menghapus transaksi
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update tiap transaksi
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category, amount, date } = req.body;

    const transaction = await Transaction.findByIdAndUpdate(
      id,
      { name, description, category, amount, date },
      { new: true, runValidators: true }
    );

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
