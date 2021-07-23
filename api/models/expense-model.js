const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Expense = new Schema(
    {
        name: { type: String, required: true },
        cost: { type: Number, required: true },
        category: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('expenses', Expense);