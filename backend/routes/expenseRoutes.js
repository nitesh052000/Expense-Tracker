const express = require("express");

const {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

// all expenses routes for add, delete, edit, get
router.post("/", auth, createExpense);
router.get("/", auth, getExpenses);
router.put("/:id", auth, updateExpense);
router.delete("/:id", auth, deleteExpense);

module.exports = router;
