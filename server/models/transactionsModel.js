const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  Amount: { type: Number, required: true },
  TransactionType: { type: String, required: true },
  UserId: { type: String, required: true, unique: false },
  walletAddress: { type: String,  },
  Date: { type: String, required: true },
  Status: { type: Boolean, required: true },
  Balance: { type: Number, required: true },
  InvestAmount: { type: Number },
  PlanType: { type: String },
});

const transactionsModel = mongoose.model("Transactions", transactionSchema);

module.exports = transactionsModel;
