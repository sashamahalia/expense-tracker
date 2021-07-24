const mongoose = require("mongoose");

const schema = mongoose.Schema({
	name: { type: String, required: true },
  cost: { type: Number, required: true },
  category: { type: String, required: true }
})

module.exports = mongoose.model("Expense", schema)