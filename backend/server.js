const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRouter = require("./routes/authRoutes");
const expenseRouter = require("./routes/expenseRoutes");

// dotenv configuration
dotenv.config();

// Db connection
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // to accept json data

app.use("/api/auth", userRouter);
app.use("/api/expenses", expenseRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
