const express = require('express');
const router = express.Router();
const routes = require('./expenseRouter');
const mongoose = require("mongoose");


// const db = require('../db');

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost:27017/expense-tracker", { useNewUrlParser: true })
	.then(() => {
		const app = express();
    app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})

module.exports = router;
