const mongoose = require("mongoose");

const dashboardBalancesSchema = new mongoose.Schema({
  UserId: { type: String, required: true, unique: false },
  mainBalance: { type: Number, required: true },
  referrals: { type: Number, required: true },
  bonusBalance: { type: Number, required: true },
});

const dashboardBalancesModel = mongoose.model(
  "DashboardBalances",
  dashboardBalancesSchema
);

module.exports = dashboardBalancesModel;
