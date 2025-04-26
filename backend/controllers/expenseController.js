const Expense = require("../models/expenseModal");

// function to create new expense
exports.createExpense = async (req, res) => {
  try {
    const { amount, category, date, description } = req.body;
    console.log("body", req.body);
    if (!amount || !category || !date) {
      return res.status(401).json({ message: "Please enter all fields" });
    }

    const expense = await Expense.create({
      userId: req.user.id,
      amount,
      category,
      date,
      description,
    });

    res.status(201).json(expense);
  } catch (err) {
    console.log("Error in creating expenses", err);
    res.status(500).json({ message: err.message });
  }
};

// function to get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id }).sort({
      date: -1,
    });
    res.json(expenses);
  } catch (err) {
    console.log("Error in creating expenses", err);
    res.status(500).json({ message: err.message });
  }
};

// function to update expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Expense.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log("Error in creating expenses", err);
    res.status(500).json({ message: err.message });
  }
};

// function to delete expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expenses = await Expense.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });
    console.log("after delete expes", expenses);
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
