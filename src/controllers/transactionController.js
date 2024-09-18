const Transaction = require('../models/Transaction');

// Menambah transaksi baru
exports.addTransaction = async (req, res) => {
    try {
        const { amount, description, category, type } = req.body;

        const transaction = new Transaction({
            amount,
            description,
            category,
            type
        });

        await transaction.save();

        res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
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
            data: transactions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

// Menghapus transaksi
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: 'Transaction not found'
            });
        }

        await transaction.remove();

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};
