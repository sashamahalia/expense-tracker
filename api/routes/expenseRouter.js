const express = require("express");
const Expense = require("../models/Expense")
const router = express.Router();

module.exports = router;

router.get("/expenses", async (req, res) => {
  const expenses = await Expense.find();
  res.send(expenses);
})

// const express = require('express');

// const ExpenseCtrl = require('../controllers/expense-ctrl');

// const router = express.Router();

// router.post('/expense', ExpenseCtrl.createExpense);
// router.delete('/expense/:id', ExpenseCtrl.deleteExpense);
// router.get('/expenses', ExpenseCtrl.getExpenses);

module.exports = router;