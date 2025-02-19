const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();


app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_NAME || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

const userRoute = require("./routes/userRoute");
const transactionsRoute = require("./routes/transactionsRoute");
const dashboardBalancesRoute = require("./routes/dashboardBalancesRoute");
app.use("/user", userRoute);
app.use("/transaction", transactionsRoute);
app.use("/balance", dashboardBalancesRoute);

const URL = process.env.DB_URL;
mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

  const PORT = process.env.PORT || 7500;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  