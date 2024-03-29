const express = require("express");
const router = express.Router();
const transactionsModel = require("../models/transactionsModel");

router.post("/transact", async (req, res) => {
  try {
    const newTransaction = new transactionsModel(req.body);
    const savedTransaction = await newTransaction.save();
    res.status(201).json({ transaction: savedTransaction });
  } catch (error) {
    console.error("Could not process transaction:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.put("/updateTransaction/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTransaction = await transactionsModel.findByIdAndUpdate(
      id,
      { Status: true },
      { new: true }
    );
    res.status(200).json({ transactions: updatedTransaction });
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/userTransaction", async (req, res) => {
  try {
    const { userId } = req.query;
    // Fetch user transactions from the database
    const userTransactions = await transactionsModel.find({ UserId: userId });

    res.status(200).json({ transactions: userTransactions });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/Transaction", async (req, res) => {
  try {
    // Fetch user transactions from the database
    const userTransactions = await transactionsModel.find();

    res.status(200).json({ transactions: userTransactions });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.put("/dailyBonus", async (req, res) => {
  const { _id } = req.query;
  try {
    const user = await transactionsModel.findByIdAndUpdate(
      _id,
      { $set: req.body }, // Assuming req.body contains the updated fields
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/receiptTransaction", async (req, res) => {
  try {
    const { _id } = req.query;
    console.log(_id);
    // Fetch user transactions from the database
    const receiptTransactions = await transactionsModel.findById(_id);

    res.status(200).json({ transactions: receiptTransactions });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
