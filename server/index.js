const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
cors({
  origin: [process.env.CLIENT_NAME],
});

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

const userRoute = require("./routes/userRoute");
const transactionsRoute = require("./routes/transactionsRoute");
const dashboardBalancesRoute = require("./routes/dashboardBalancesRoute");
app.use("/user", userRoute);
app.use("/transaction", transactionsRoute);
app.use("/balance", dashboardBalancesRoute);

const URL = process.env.DB_URL;
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(3001, () => {
  console.log("THE BACKEND SERVER IS LIVE");
});
