const express = require("express");
const Expense = require("../models/Expense")
const router = express.Router();

module.exports = router;

router.get("/expenses", async (req, res) => {
  const expenses = await Expense.find();
  res.send(expenses);
})

router.post("/expenses", async (req, res) => {
	const expense = new Expense({
		name: req.body.name,
		cost: req.body.cost,
    category: req.body.category
	})
	await expense.save();
	res.send(expense);
})

router.delete("/expense/:id", async (req, res) => {
	try {
		await Expense.deleteOne({ _id: req.params.id });
		res.status(204).send();
	} catch {
		res.status(404);
		res.send({ error: "Expense doesn't exist!" });
	}
})

// const express = require('express');

// const ExpenseCtrl = require('../controllers/expense-ctrl');

// const router = express.Router();

// router.post('/expense', ExpenseCtrl.createExpense);
// router.delete('/expense/:id', ExpenseCtrl.deleteExpense);
// router.get('/expenses', ExpenseCtrl.getExpenses);

module.exports = router;